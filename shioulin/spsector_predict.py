import pandas as pd
from matplotlib import pyplot as plt
from matplotlib.dates import DateFormatter, MonthLocator
from fbprophet import Prophet

plt.style.use('ggplot')

# read in file, time series has data for all 365 days, for weekends or holidays
# we use the previous day's close #need 365 days for fourier transform
# (periodic seasonality) since 365 is hardcoded
df = pd.read_csv('SPSectorFilled.csv')

# Dataset consists of the following ETFs:
# XLY, XLP, XLE, XLF, XLV, XLI, XLB, XLK, XLU
data_string = 'XLY'

df['ds'] = df['Date']
df['y'] = df[data_string]

# set changepoint parameter, default is 0.05. When set to a large number (e.g.
# 0.20) the system is more flexible (i.e., tends to overfit)
m = Prophet(changepoint_prior_scale=0.02)
m.fit(df)

future = m.make_future_dataframe(periods=180)
forecast = m.predict(future)

# plot forecast
forecast_color = '#0072B2'
fig1 = plt.figure(facecolor='w', figsize=(12, 8))
ax = plt.subplot(111)
ax.plot(m.history['ds'], m.history['y'], 'k.')
ax.plot(forecast['ds'], forecast['yhat'], ls='-', c=forecast_color)
ax.fill_between(forecast['ds'].values,
                forecast['yhat_lower'],
                forecast['yhat_upper'],
                facecolor=forecast_color, alpha=0.2)
ax.plot(forecast['ds'], forecast['yhat_lower'],
        ls='--', c=forecast_color, alpha=0.5)
ax.plot(forecast['ds'], forecast['yhat_upper'],
        ls='--', c=forecast_color, alpha=0.5)

ax.grid(True, which='major', c='gray', ls='-', lw=1, alpha=0.2)
ax.set_xlabel('ds')
ax.set_ylabel('y')
fig1.show()
fig_string = data_string + 'forecast.png'
fig1.tight_layout()
fig1.savefig(fig_string)

# plot components(trend, holidays, weekly, yearly if available)
plot_trend = True
plot_holidays = m.holidays is not None
plot_weekly = 'weekly' in forecast
plot_yearly = 'yearly' in forecast

npanel = plot_trend + plot_holidays + plot_weekly + plot_yearly
print(npanel)
fig2 = plt.figure(facecolor='w', figsize=(12, 3 * npanel))
panel_num = 1
ax = plt.subplot(npanel, 1, panel_num)
ax.plot(forecast['ds'], forecast['trend'], ls='-', c=forecast_color)
ax.fill_between(forecast['ds'].values,
                forecast['trend_lower'],
                forecast['trend_upper'],
                facecolor=forecast_color, alpha=0.2)
ax.plot(forecast['ds'], forecast['trend_lower'],
        ls='--', c=forecast_color, alpha=0.5)
ax.plot(forecast['ds'], forecast['trend_upper'],
        ls='--', c=forecast_color, alpha=0.5)
ax.set_xlabel('ds')
ax.set_ylabel('trend')

if plot_holidays:
    panel_num += 1
    ax = fig2.add.subplot(npanel, 1, panel_num)
    holiday_comps = m.holiday['holidays'].unique()
    y_holiday = forecast[holiday_comps].sum(1)
    y_holiday_l = forecast[[h + '_lower' for h in holiday_comps]].sum(1)
    y_holiday_u = forecast[[h + '_upper' for h in holiday_comps]].sum(1)
    ax.plot(forecast['ds'], y_holiday, ls='-', c=forecast_color)
    ax.set_xlabel('ds')
    ax.set_yabel('holidays')


if plot_weekly:
    panel_num += 1
    ax = plt.subplot(npanel, 1, panel_num)
    df_s = forecast.copy()
    df_s['dow'] = df_s['ds'].dt.weekday_name
    df_s = df_s.groupby('dow').first()
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday']
    y_weekly = [df_s.loc[d]['weekly'] for d in days]
    y_weekly_l = [df_s.loc[d]['weekly_lower'] for d in days]
    y_weekly_u = [df_s.loc[d]['weekly_upper'] for d in days]
    ax.plot(range(len(days)), y_weekly, ls='-', c=forecast_color)
    ax.set_xticklabels(days)
    ax.set_xlabel('Day of week')
    ax.set_ylabel('weekly')

if plot_yearly:
    panel_num += 1
    ax = plt.subplot(npanel, 1, panel_num)
    df_s = forecast.copy()
    df_s['doy'] = df_s['ds'].map(lambda x: x.strftime('2000-%m-%d'))
    df_s = df_s.groupby('doy').first().sort_index()
    ax.plot(pd.to_datetime(df_s.index), df_s['yearly'],
            ls='-', c=forecast_color)
    months = MonthLocator(range(1, 13), bymonthday=1, interval=2)
    ax.xaxis.set_major_formatter(DateFormatter('%B %-d'))
    ax.xaxis.set_major_locator(months)
    ax.set_xlabel('Day of year')
    ax.set_ylabel('yearly')

fig2.show()
fig_string = data_string + 'component.png'
fig2.tight_layout()
fig2.savefig(fig_string)

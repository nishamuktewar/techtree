// From https://gist.github.com/mathewbyrne/1280286
function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


$(document).ready(function(){

  var $window = $(window);
  var $body = $('body');
  var $content = $('#content');
  var $toc = $('#toc');
  var $header = $('#header');
  var $toc_links = $('#toc a');
  var scrolling = false;
  var scroll_offset = 56;

  var link_group = false;
  var link_num = false;
  var level_2_counter = 0;
  var level_3_counter = 0;
  $toc_links.each(function(i, link) {
    var $link = $(link);
    var $parent = $link.parent();
    if ($parent.hasClass('toclevel1')) {
      link_group = $parent.text();
      link_num = $('.toclevel1').index($parent) + 1;
      level_2_counter = 0;
      level_4_counter = 0;
      var spec_counter = link_num;
    } else if ($parent.hasClass('toclevel2')) {
      level_2_counter++;
      level_3_counter = 0;
      var spec_counter = link_num + '.' + level_2_counter;
    } else if ($parent.hasClass('toclevel3')) {
      level_3_counter++;
      var spec_counter = link_num + '.' + level_2_counter + '.' + level_3_counter;
    };
    $parent.attr('data-section', link_group);
    $parent.attr('data-section-num', link_num);
    $parent.attr('data-spec-num', spec_counter);
  });

  var html = '';
  html += '<div id="app-header">';
  html += '<div class="left toc-toggle absolute left-0 top-0" title="Show/hide Table of Contents"><i class="fa fa-list"></i><i class="fa fa-times"></i></div>';
  html += '<div class="middler">';
  html += '<div id="header-section" class="left bold">Fast Forward Labs</div>';
  html += '<div class="right">';
  html += '<image src="figures/logo.svg" alt="Fast Forward Labs" />';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  var $header = $(html);
  $body.prepend($header);

  var $header_section = $('#header-section');

  // Use TOC to figure out title elements
  var section_titles = [];
  var section_tops = [];
  $toc_links.each(function(i, link) {
    var $target = $(link).attr('href');
    section_titles.push($target);
  });

  var global_breakpoint = "";
  function checkBreakpoint() {
    var window_width = $(window).width();
    if (window_width < 820) {
      if (global_breakpoint == "large") {
        resetHeader();
      }
      global_breakpoint = "small";
    } else {
      if (global_breakpoint == "small") {
        $body.removeClass('small-show-sidebar');
      }
      getTops();
      checkCurrent();
      global_breakpoint =  "large";
    }
  }
  checkBreakpoint();

  $toc_links.on('click', function() {
    getTops();
    var target_hash = $(this).attr('href');
    var target = $(target_hash);
    var scroll_target = target.offset().top;
    $toc_links.removeClass('active');
    $(this).addClass('active');
    jumping = true;
    $('html, body').animate({
      scrollTop: scroll_target - scroll_offset
    },200);
    setTimeout(function(){
      jumping = false;
      checkCurrent();
      setHash(target_hash);
    },250);
    $body.removeClass('small-show-sidebar');
    return false;
  });

  // Renumber figures and tables
  var $fig_nums = $('.fig-num');
  var $tab_nums = $('.tab-num');
  var $sect1s = $('.sect1');

  function renumber($targets, name) {
    var current_sect = 0;
    var target_counter = 0;
    $targets.each(function(i, target) {
      var $this = $(this);
      var $sect1 = $this.parents('.sect1');
      var sect = $sect1s.index($sect1);
      if (sect == current_sect) {
        target_counter++;
      } else {
        target_counter = 1;
        current_sect = sect;
      }
      var sect_display = sect + 1;
      var html = name + " " + sect_display + "." + target_counter;
      var link_target = $this.parents('.elementblock').attr('id');
      var linker_string = '.doc_link[href="#' + link_target + '"]';
      var $linkers = $(linker_string);
      $linkers.each(function(i, linker) {
        $(this).html('<span class="fig-link">' + html + '</span>');
      });
      $this.html(html + ' ');
    });
  }

  renumber($fig_nums, "FIGURE");
  renumber($tab_nums, "TABLE");

  $toclevel1s = $('.toclevel1');
  $toclevels = $('.toclevel1, .toclevel2, .toclevel3');

  $toclevel1s.each(function(i, toclevel1) {
    var $toc_a = $(toclevel1).children('a');
    var link_text = '<span class="toc-num">' + (i + 1) + '</span> <span class="toc-text">' + $toc_a.text() + '</span>';
    $toc_a.html(link_text);
  });

  // $toclevels.each(function(i, toclevel) {
  //   var $toc_a = $(toclevel).children('a');
  //   var link_text = '<span class="toc-text">' + $toc_a.text() + '</span>';
  //   $toc_a.html(link_text);
  // })

  // Append footnote pop for later use
  // $content.append('<div id="footnote_pop"><div class="pointer"><div class="visible_pointer"></div></div><div class="pop_text"></div></div>');
  // var $footnote_pop = $('#footnote_pop');
  // var $footnote = $('.footnote');
  // var $pop_pointer = $footnote_pop.find('.pointer');

  // var in_footnote = false;

  // $footnote.mouseenter(function() {
  //   var $this = $(this);
  //   if (!$this.hasClass('footnote')) {
  //     $this = $this.parent('span');
  //   }
  //   var footnote_width = 500;
  //   var this_width = $this.width();
  //   var this_top = $this.offset().top;
  //   var this_left = $this.offset().left;
  //   var this_height = $this.height();
  //   var footnote_html = $this.attr('data-note');
  //   var this_parent = $content;
  //   var parent_width = this_parent.width();
  //   var parent_left = this_parent.offset().left;
  //   var adjusted_left = this_left - parent_left;
  //   var parent_center = parent_left + (parent_width/2);
  //   var center_left = this_left + (this_width/2) - (footnote_width/2);
  //   var footnote_right = center_left + footnote_width;
  //   var adjust_left = center_left;
  //   var pointer_width = 40;
  //   var pointer_left = (footnote_width/2) - (pointer_width/2);
  //   if (center_left < parent_left) {
  //     adjust_left = parent_left;
  //     pointer_left = this_left - ((pointer_width - this_width)/2) -parent_left;
  //   } else if (footnote_right > parent_left + parent_width) {
  //     adjust_left = parent_left + parent_width - footnote_width;
  //     pointer_left = this_left - ((pointer_width - this_width)/2) - adjust_left;
  //   }
  //   $footnote_pop.css({
  //     top: this_top + this_height + 2,
  //     left: adjust_left
  //   });
  //   $pop_pointer.css('left', pointer_left);
  //   $footnote_pop.find('.pop_text').html(footnote_html);
  //   $footnote_pop.addClass('active');
  //   in_footnote = true;
  // });
  // $footnote.mouseleave(function() {
  //   in_footnote = false;
  //   // mouseleave fires before enter so wait a millisecod
  //   setTimeout(function(){
  //     if (!in_footnote) {
  //       $footnote_pop.removeClass('active')
  //     }
  //   }, 200);
  // });
  // $footnote_pop.mouseenter(function() {
  //   in_footnote = true;
  // });
  // $footnote_pop.mouseleave(function() {
  //   in_footnote = false;
  //   setTimeout(function(){
  //     if (!in_footnote) {
  //       $footnote_pop.removeClass('active')
  //     }
  //   }, 200);
  // });

  var $footnotes = $('.footnote');
  $footnotes.each(function(i, footnote) {
    var $footnote = $(footnote);
    var footnote_html = $footnote.attr('data-note');
    $footnote.append('<span class="footnote-text">' + footnote_html + '</span>');
  });

  var $footnote_link = $('.footnote > a');
  $footnote_link.click(function() {
    var $parent = $(this).parent();
    if ($parent.hasClass('active')) {
      $parent.removeClass('active');
    } else {
      $parent.addClass('active');
    }
    return false;
  });

  var $toc = $('#toc');
  var $toc_toggle = $('.toc-toggle');

  $toc_toggle.click(function() {
    getTops();
    if (global_breakpoint == "small") {
      $body.toggleClass('small-show-sidebar');
      checkCurrent();
      resetHeader();
    } else {
      $body.toggleClass('large-hide-sidebar');
    }
  });

  var $doc_links = $('.doc_link');

  var $headers = $('#content').find('h2, h3, h4, h5').not('.title');

  var l2_counter = 0;
  var l3_counter = 0;
  var l4_counter = 0;
  var l5_counter = 0;
  $headers.each(function(i) {
    var $this = $(this);
    var tagname = $this[0].tagName;
    var sect_num = "";
    if (tagname == 'H2') {
      l2_counter++;
      l3_counter = 0;
      l4_counter = 0;
      l5_counter = 0;
      sect_num = l2_counter;
    } else if (tagname == 'H3') {
      l3_counter++;
      l4_counter = 0;
      l5_counter = 0;
      sect_num = l2_counter + '.' + l3_counter;
    } else if (tagname == 'H4') {
      l4_counter++;
      l5_counter = 0;
      sect_num = l2_counter + '.' + l3_counter + '.' + l4_counter;
    } else if (tagname == 'H5') {
      l5_counter++;
      sect_num = l2_counter + '.' + l3_counter + '.' + l4_counter + '.' + l5_counter;
    }
    var sect_text = $this.text();
    var $sect_link = $this.children('.section-header-link');
    $this.addClass('sect-header')
    var sect_html = '<div class="sect-num">' + sect_num + '</div>' + '<span class="sect-title">' + sect_text.trim() + '</span>';

    var $section_anchor = $this.parents('.section-inner-header').children('.section-anchor');
    var section_slug = slugify(sect_num.toString().replace(/\./g,'-') + ' ' + sect_text);
    $section_anchor.attr('id', section_slug);

    var old_link = $sect_link.attr('href');
    var $linkers = $('.doc_link[href="' + old_link + '"]');

    $linkers.each(function(i,link) {
      var $this = $(this);
      var html = '<span class="spec-num">' + sect_num + '</span>&nbsp;' + '<span class="doc-target">' + sect_text.trim() + '</span>';
      $this.addClass('adjusted').html(html).attr('href', '#' + section_slug);
    });

    // asciidoc hack
    var toc_id = $this.attr('id');
    var $toc_link = $('#toc a[href="#' + toc_id + '"]');
    $toc_link.attr('href', '#' + section_slug);

    $sect_link.attr('href', '#' + section_slug);
    $sect_link.html(sect_html);
  });

  // Get section top titles
  function getTops() {
    section_tops = [];
    for (var i=0;i<section_titles.length;i++) {
      var $section_title = $(section_titles[i]);
      // 28 is the margin top
      var section_top = $section_title.offset().top - scroll_offset - 5;
      section_tops.push(section_top);
    }
    section_tops.reverse();
  }
  getTops();

  setInterval(function() {
    getTops();
  }, 5000);

  $(window).resize(function() {
    getTops();
    checkBreakpoint();
  });

  $(window).resize(function() {
    checkBreakpoint();
  });

  // Inject Download Links
  var download_html = '';
  download_html += '<div class="download_box px2 py2 border-top border-box bottom-0 fixed">';
  download_html += '<div class="prototype_holder mb1">';
  download_html += '<div class="download_title mb05">View the Prototypes</div>';
  download_html += '<a style="display: block; margin-bottom: 0.2rem" href="/loans" class="prototype_link" target="_blank">Loan Officer Simulator</a>';
  download_html += '<a style="display: block;" href="/real_estate" class="prototype_link" target="_blank">Probabilistic Real Estate</a>';
  download_html += '</div>';
  download_html += '<div class="download_title mb05">Download the Report</div>';
  download_html += '<div class="">';
  download_html += '<div class="">';
  download_html += '<a href="figures/FF05-Probabilistic-Programming.pdf" target="_blank">PDF</a>, ';
  download_html += '<a href="figures/FF05-Probabilistic-Programming.epub" target="_blank">EPUB</a>, ';
  download_html += '<a href="figures/FF05-Probabilistic-Programming.mobi" target="_blank">Kindle</a>';
  download_html += '</div>';
  download_html += '</div>';
  download_html += '</div>';
  $toc.append(download_html);

  var $download_box = $('.download_box');
  var download_box_height = $download_box.outerHeight();
  $toc.css('padding-bottom', download_box_height + 18);

  function resetHeader() {
    $header_section.removeClass('sectioned');
    $header_section.text('Fast Forward Labs');
  }

  var current_section = 0;
  var topped = true;
  function checkCurrent() {
    var scroll_top = $window.scrollTop();
    if (scroll_top < 20) {
      $toc_links.removeClass('active');
      topped = true;
      resetHeader();
      if (!$toc.hasClass('active')) {
        $toc.scrollTop(0);
      }
    } else {
      // Check current section
      for (var i=0; i<section_tops.length; i++) {
        var section_top = section_tops[i];
        if (scroll_top + (20*3) > section_top) {
          if ((current_section != i && !scrolling) || topped) {
            $toc_links.removeClass('active');
            $('.toc_group').removeClass('active');
            var $toc_link = $toc_links.eq(section_tops.length - i - 1);
            var link_from_top = $toc_link.parent().position().top;
            var toc_bottom = $toc.innerHeight();
            var toc_scroll_top = $toc.scrollTop();
            if (!$toc.hasClass('active')) {
              if (link_from_top + 200 > toc_bottom) {
                $toc.scrollTop(link_from_top - toc_bottom + toc_scroll_top + 200);
              } else if (link_from_top < 60) {
                $toc.scrollTop(toc_scroll_top + link_from_top - 60);
              }
            }
            $toc_link.addClass('active');
            var $parent = $toc_link.parent();
            $toc_link.parents('.toc_group').addClass('active');
            $header_section.addClass('sectioned');
            $header_section.html('<span class="sect-num">' + $parent.attr('data-section-num')  + '</span> ' + $parent.attr('data-section'));
            current_section = i;
          }
          topped = false;
          break;
        }
      }
    }
  }

  $toc.mouseenter(function() {
    $toc.addClass('active');
  });
  $toc.mouseleave(function() {
    $toc.removeClass('active');
  });

  var jumping = false;

  var hash_starter = 0;
  var hash_set = false;
  var scroll_reset_dist = 200;
  var start_buffer = false

  function setHash(target) {
    $(target).parent().addClass('active');
    hash_set = true;
    history.pushState(null, null, target);
  }

  function hashCheck(scroll) {
    if (hash_set) {
      hash_starter = scroll;
      hash_set = false;
    } else {
      if (window.location.hash.length > 0 && !start_buffer) {
        if (Math.abs(hash_starter - scroll) > scroll_reset_dist) {
          $('.section-inner-header.active').removeClass('active');
          history.pushState(null, null, window.location.pathname);
          hash_set = false;
        }
      }
    }
  }

  $window.scroll(function() {
    if (global_breakpoint == "large" && !jumping) {
      checkCurrent();
      hashCheck($window.scrollTop());
    }
  });

  // $doc_links.each(function(i,link) {
  //   getTops();
  //   var $link = $(link);
  //   var target = $(link).attr('href');
  //   var $target = $(target);
  //   if ($target[0] != undefined) {
  //     if ($target[0].tagName == "H2" || $target[0].tagName == "H3" || $target[0].tagName == "H4" || $target[0].tagName == "H5") {
  //       // var target_name = $target.find('.sect-title').text();
  //       // var $toc_link = $('#toc a[href$="' + target + '"]');
  //       // var spec_num = '<span class="spec-num">' + $toc_link.parent().attr('data-spec-num') + '</span>&nbsp;';
  //       // var html = spec_num + '<span class="doc-target">' + target_name + '</span>';
  //       // target_name = html;
  //     } else if ($target[0].className == "sidebarblock") {
  //       target_name = '<span class="doc-target">' + $target.find('h5').first().text() + '</span>';
  //     } else {
  //       var $title = $target.find('.title');
  //       var target_name = $title.find('.fig-num, .tab-num').text().trim();
  //       target_name = '<span class="doc-target fig-link">' + target_name + '</span>';
  //     }
  //     $link.html(target_name);
  //   }
  // });

  $doc_links.click(function() {
    jumping = true;
    var target = $(this).attr('href');
    var scroll_target = $(target).offset().top;
    $('html, body').animate({
      scrollTop: scroll_target - scroll_offset
    },200);
    setTimeout(function() {
      jumping = false
      checkCurrent();
      setHash(target);
    },250);
    return false;
  });

  $('.section-header-link').click(function() {
    var target = $(this).attr('href');
    var scroll_target = $(target).offset().top;
    $('html, body').animate({
      scrollTop: scroll_target - scroll_offset
    },200);
    setTimeout(function() {
      setHash(target);
    },200);
    return false;
  });

  // From http://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
  function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
  }
  function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
      var tmparr = prmarr[i].split("=");
      params[tmparr[0]] = tmparr[1];
    }
    return params;
  }
  var params = getSearchParameters();

  if (params.figure_debug !== undefined) {
    if (params.figure_debug == "true") {
      $('.paragraph, .ulist, .olist').hide();
    }
  }

  if (window.location.hash.length > 0) {
    var start_buffer = true;
    $(window.location.hash).parent().addClass('active');
    setTimeout(function() {
      start_buffer = false;
      hash_set = true;
    }, 1000);
  }

});

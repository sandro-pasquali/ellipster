(function($) {
    $.fn.ellipster = function(options) {
        var defaults = {
            'chars' 		: '...',
            'background' 	: 'white',
            'link'			: null
        };

        options = $.extend(defaults, options);
        this.each(function() {
        
            var $this	= $(this);
            var lineHeight =  $this.css("line-height").replace('px','');
            var bs = '-2px 0px 4px ' + options.background; 
            
            $this.css('position', 'relative');

            var $ellipster = $(!options.link ? '<div></div>' : '<a href="' + options.link + '"></a>');
            $ellipster
            .css({
            	position			: 'absolute',
        		right				: 0,
        		top					: $this.height() - lineHeight,
        		'padding-left' 		: '2px',
        		height				: lineHeight,
        		backgroundColor		: options.background,
        		'-moz-box-shadow'	: bs,
				'-webkit-box-shadow': bs,
				'box-shadow'		: bs
        	})
        	.text(options.chars)
        	.appendTo($this)
        });

        return this;
    };
}) (jQuery);
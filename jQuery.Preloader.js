/* =========================================================
 * jQuery.Preloader.js
 * Repo: https://github.com/landscapeInstitute/jQueryPreloaderSpinner
 * Author: Louis Varley
 * =========================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

jQuery.fn.preloader = function(options){
	
	this.options = jQuery.extend({
		useImage: false,
		showOnInit: true,
		loadingImage: "../src/images/loader.gif",
		loadingClass: "loader",
		wrapperClass: "loading-indicator-wrapper",
		text: '',
		size: 'medium',
	}, options );
	
	this.plugin =  {	
		init: function (element) {
			
			this.element = element;
			if(jQuery(this.element).children().length < 1 ) {
				this.addLoader();
			}
			
			
			if (this.options.showOnInit) {
				this.show();
			} else {
				this.hide();
			}
		},
		addLoader: function () {
			var wrapper = this.createDOM();
			this.wrapper = wrapper;
			jQuery(this.element).append(wrapper);
		},
		createDOM: function() {
			var wrapper = jQuery('<div class="' + this.options.wrapperClass + ' ' + this.options.size + '"></div>'),
				helper = jQuery('<span class="loading-indicator-helper"></span>'),
				indicator = this.options.useImage ? jQuery('<img src="' + this.options.loadingImage + '" />') : jQuery('<div class="' + this.options.loadingClass + '"></div>');
			wrapper.append(helper);
			wrapper.append(indicator);
						
			return wrapper;
		},
		show: function() {
			jQuery(this.element).show();
			if(this.options.text){
				jQuery(this.wrapper).html( jQuery(this.wrapper).html() + "<p>" + this.options.text + "</p>")
			}
			
		},
		hide: function() {
			jQuery(this.element).hide();
		}
	}
	
	this.plugin.options = this.options;
	this.plugin.init(this);
	
    return this.plugin;
}

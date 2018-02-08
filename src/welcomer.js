/**!
 * @fileOverview Welcomer.js - Slick welcome bars for your pages
 * @version 2.0.0
 * @license
 * MIT License
 *
 * Copyright (c) 2017 Jonas Hübotter
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class Welcomer {

    constructor(opts = {}) {

        this._element = document.querySelector('.welcomer');
        this._options = {
            autoclose: opts.autoclose || false,
            delay: opts.delay || 1000
        };

    }

    get element() {
        return this._element;
    }
    set element(val) {
        this._element = val;
    }

    get options() {
        return this._options;
    }
    set options(val) {
        this._options = val;
    }

    init() {
        document.querySelectorAll('.welcomer--close, .welcomer > a').addEventListener( 'click', () => this.disappear() );
        setTimeout( () => {
            this.appear();
            if (this.options.autoclose)
                this.autoclose(this.options.autoclose);
        }, this.options.delay );
    }

    appear() {
        this.element.classList.add('welcomer--shown');
    }
    disappear() {
        this.element.classList.remove('welcomer--shown');
    }
    toggle() {
        if (this.element.lcassList.contains('welcomer--shown'))
            this.disappear()
        else
            this.appear();
    }

    autoclose(delay) {
        setTimeout( () => {
            if ( this.element.parentElement.querySelector('.welcomer:hover').length > 0 )
                this.autoclose(delay)
            else
                this.disappear();
        }, delay );
    }

};

export default Welcomer;

function Metric()
{
    this.element  = document.getElementById('metrics');
    this.elements = {};

    for (var i = this.metrics.length - 1; i >= 0; i--) {
        this.elements[this.metrics[i]] = document.getElementById(this.metrics[i]);
    }

    Reveal.addEventListener('slidechanged', this.onSlidechange.bind(this));
}

/**
 * Metrics
 *
 * @type {Array}
 */
Metric.prototype.metrics = [
    'motivation',
    'value',
    'deadline',
    'debt',
    'budget',
    'satisfaction'
];

/**
 * Open
 */
Metric.prototype.open = function() {
    this.element.style.display = 'block';
};

/**
 * Close
 */
Metric.prototype.close = function() {
    this.element.style.display = 'none';
};

/**
 * On slide change
 *
 * @param {Event} event
 */
Metric.prototype.onSlidechange = function(event) {
    var slide  = event.currentSlide;

    if (slide.hasAttribute('data-motivation')) {
        this.open();
        setTimeout(function () { this.loadSlide(slide); }.bind(this), 500)
    } else {
        this.close();
    }
};

/**
 * Load slide
 *
 * @param {Element} slide
 */
Metric.prototype.loadSlide = function(slide) {
    for (var metric, i = this.metrics.length - 1; i >= 0; i--) {
        metric = this.metrics[i];
        this.set(metric, slide.getAttribute('data-' + metric));
    }
};

/**
 * Set metric value
 *
 * @param {String} metric
 * @param {Number} value
 */
Metric.prototype.set = function(metric, value) {
    if (value === null || typeof(this.elements[metric]) === 'undefined') {
        throw 'undefined';
        return;
    }
    this.elements[metric].style.width = value * 20 + '%';
};

// Generated by CoffeeScript 1.3.1
(function() {
  var timeline, _class;

  timeline = (function() {

    timeline.name = 'timeline';

    function timeline() {
      return _class.apply(this, arguments);
    }

    _class = (timeline.hourFrom, timeline.hourTo, timeline.interval, timeline.pixelsPerInterval, timeline.xOffset = 0, timeline.yOffset = 150);

    (function() {
      return this.width = (((this.hourTo - this.hourFrom) * 60) / this.interval) * this.pixelsPerInterval;
    });

    timeline.intervalWidth = 2;

    timeline.intervalHeight = 5;

    timeline.prototype.drawInterval = function(ctx, xPos) {
      var minutes, timeString;
      console.log("drawing interval @ " + xPos);
      ctx.fillRect(xPos, this.yOffset, this.intervalWidth, this.intervalHeight);
      timeString = this.hourFrom;
      minutes = ((xPos - this.xOffset) / this.pixelsPerInterval) * this.interval;
      minutes %= 60;
      if (minutes === 0) {
        timeString += ':' + minutes + '0';
      } else {
        timeString += ':' + minutes;
      }
      if (((minutes + this.interval) % 60) === 0) {
        this.hourFrom += 1;
      }
      ctx.save();
      ctx.translate(xPos - 4, this.yOffset + 10);
      ctx.rotate(Math.PI / 3);
      ctx.fillText(timeString, 0, 0);
      return ctx.restore();
    };

    timeline.prototype.render = function(ctx) {};

    return timeline;

  })();

}).call(this);

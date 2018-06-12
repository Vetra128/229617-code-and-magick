'use strict';

var RENDER_CLOUD_WIDTH = 420;
var RENDER_CLOUD_HEIGHT = 270;
var RENDER_CLOUD_X = 100;
var RENDER_CLOUD_Y = 10;
var GAP = 25;
var TITLE_INTENT = 10;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var INDENT = 90;
var INDENT_NAME = 20;
var INDENT_TIME = 10;
var INDENT_TOP = 60;
var SHADOW_SHIFT = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, RENDER_CLOUD_WIDTH, RENDER_CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var fillBarColor = function (ctx, namePlayer) {
  if (namePlayer === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, RENDER_CLOUD_X + SHADOW_SHIFT, RENDER_CLOUD_Y + SHADOW_SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, RENDER_CLOUD_X, RENDER_CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', RENDER_CLOUD_X + GAP, RENDER_CLOUD_Y + GAP + TITLE_INTENT);
  ctx.fillText('Список результатов:', RENDER_CLOUD_X + GAP, RENDER_CLOUD_Y + GAP + TITLE_INTENT + FONT_GAP);

  var maxTime = getMaxElement(times);
  var step = BAR_MAX_HEIGHT / maxTime;
  var initialX = RENDER_CLOUD_X + GAP;
  var initialY = RENDER_CLOUD_Y + BAR_MAX_HEIGHT + INDENT_NAME + INDENT_TIME + INDENT_TOP;

  for (var i = 0; i < names.length; i++) {

    var barElemWidth = times[i] * step;
    var getY = initialY - times[i] * step;
    var getX = initialX + INDENT * i;

    fillBarColor(ctx, names[i]);
    ctx.fillRect(getX, getY, BAR_WIDTH, barElemWidth);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], getX, initialY + INDENT_NAME);
    ctx.fillText(times[i].toFixed(0), getX, getY - INDENT_TIME);
  }
};


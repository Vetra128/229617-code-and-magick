'use strict';

var WIZARD_COUNT = 4;

var NAME_LIST = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAME_LIST = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COLOR_LIST = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR_LIST = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardOptionsDialog = document.querySelector('.setup');
wizardOptionsDialog.classList.remove('hidden');

var randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var NameListMaxIndex = NAME_LIST.length - 1;
var SurnameListMaxIndex = SURNAME_LIST.length - 1;
var ColorListMaxIndex = COLOR_LIST.length - 1;
var EyeColorListMaxIndex = EYES_COLOR_LIST.length - 1;

var createWizrdsArray = function () {
  var wizards = [];
  var wizard = {};

  for (var i = 0; i < WIZARD_COUNT; i++) {

    wizard.name = NAME_LIST[randomInteger(0, NameListMaxIndex)] + ' ' + SURNAME_LIST[randomInteger(0, SurnameListMaxIndex)];
    wizard.coatColor = COLOR_LIST[randomInteger(0, ColorListMaxIndex)];
    wizard.eyesColor = EYES_COLOR_LIST[randomInteger(0, EyeColorListMaxIndex)];

    wizards.push(wizard);
  }

  return (wizards);
};

var wizards = createWizrdsArray();

var similarListElement = wizardOptionsDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var createWizard = function (wizard) {
  var createdWizard = similarWizardTemplate.cloneNode(true);

  createdWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  createdWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  createdWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return createdWizard;
};

var createWizardList = function(){
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

createWizardList();

wizardOptionsDialog.querySelector('.setup-similar').classList.remove('hidden');

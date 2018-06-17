'use strict';

var WIZARD_COUNT = 4;

var NAMES = [
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

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var NAMES_MAX_INDEX = NAMES.length - 1;
var SURNAMES_MAX_INDEX = SURNAMES.length - 1;
var COLORS_MAX_INDEX = COLORS.length - 1;
var EYES_COLORS_MAX_INDEX = EYES_COLORS.length - 1;

var randomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createWizrdsArray = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_COUNT; i++) {
    var wizard = {};
    wizard.name = NAMES[randomInteger(0, NAMES_MAX_INDEX)] + ' ' + SURNAMES[randomInteger(0, SURNAMES_MAX_INDEX)];
    wizard.coatColor = COLORS[randomInteger(0, COLORS_MAX_INDEX)];
    wizard.eyesColor = EYES_COLORS[randomInteger(0, EYES_COLORS_MAX_INDEX)];

    wizards.push(wizard);
  }

  return (wizards);
};

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

var wizardOptionsDialog = document.querySelector('.setup');
wizardOptionsDialog.classList.remove('hidden');

var wizards = createWizrdsArray();

var similarListElement = wizardOptionsDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

createWizardList();

wizardOptionsDialog.querySelector('.setup-similar').classList.remove('hidden');

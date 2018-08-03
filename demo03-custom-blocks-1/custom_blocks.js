var BLOCKS = [{
  "type": "temperature",
  "message0": "อุณหภูมิ",
  "output": "Number",
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "light_control",
  "message0": "ควบคุมแสงไฟ %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ctrl",
      "options": [
        [
          "เปิด",
          "ON"
        ],
        [
          "ปิด",
          "OFF"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}];

function initCustomBlocks() {
}

Blockly.Blocks['temperature'] = {
  init: function() {
    this.jsonInit(BLOCKS[0]);
  }
}

Blockly.Blocks['light_control'] = {
  init: function() {
    this.jsonInit(BLOCKS[1]);
  }
}

Blockly.JavaScript['temperature'] = function(block) {
  var code = 'getTemperature()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['light_control'] = function(block) {
  var dropdown_ctrl = block.getFieldValue('ctrl');

  if(dropdown_ctrl == "ON") {
    var code = 'turnLightOn();\n';
  } else {
    var code = 'turnLightOff();\n';
  }
  return code;
};

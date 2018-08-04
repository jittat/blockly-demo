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
},
{
  "type": "repeat_while_gt_zero",
  "message0": "ทำขณะที่ %1 มากกว่าศูนย์ %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "X"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}];

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

Blockly.Blocks['repeat_while_gt_zero'] = {
  init: function() {
    this.jsonInit(BLOCKS[2]);
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

Blockly.JavaScript['repeat_while_gt_zero'] = function(block) {
  var varName = block.getFieldValue('VAR');
  var loopVar = Blockly.JavaScript.variableDB_.getName(varName,
                                                       Blockly.Variables.NAME_TYPE);

  var doCode = Blockly.JavaScript.statementToCode(block, 'DO');
  doCode = Blockly.JavaScript.addLoopTrap(doCode, block.id);

  var code = 'while(' + loopVar + ' > 0) {\n' +
      doCode +
      '}\n';
  return code;
};

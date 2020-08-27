System.register("chunks:///Constants.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _classCallCheck, cclegacy, _decorator, _dec, _class, ccclass, property, Constants;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a2cc83r4uBOdYLiuBe60hoC", "Constants", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /*enum DicePoints {
          ONE = 'greeting',
          GOODBYE = 'goodbye',
          FINISHED_WALK = 'finished-walk',
          START_BRAKING = 'start-braking',
          END_BRAKING = 'end-braking',
          SHOW_COIN = 'show-coin',
          GAME_START = 'game-start',
          GAME_OVER = 'game-over',
          NEW_LEVEL = 'new-level',
          SHOW_TALK = 'show-talk',
          SHOW_GUIDE = 'show-guide',
          UPDATE_PROGRESS = 'update-progress',
      }*/

      _export("Constants", Constants = (_dec = ccclass('Constants'), _dec(_class = function Constants() {
        _classCallCheck(this, Constants);
      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Rules.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, Rules;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a799UedPpL/LKG7FKEZKXl", "Rules", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Rules", Rules = (_dec = ccclass('Rules'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(Rules, _Component);

        function Rules() {
          _classCallCheck(this, Rules);

          return _possibleConstructorReturn(this, _getPrototypeOf(Rules).apply(this, arguments));
        }

        _createClass(Rules, [{
          key: "openRuels",
          value: function openRuels() {
            this.node.active = true;
          }
        }, {
          key: "closeRuels",
          value: function closeRuels() {
            this.node.active = false;
          }
        }]);

        return Rules;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///StartGame.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, StartGame;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b1589RDgDtLLrKqWgIXakT7", "StartGame", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("StartGame", StartGame = (_dec = ccclass('StartGame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(StartGame, _Component);

        function StartGame() {
          _classCallCheck(this, StartGame);

          return _possibleConstructorReturn(this, _getPrototypeOf(StartGame).apply(this, arguments));
        }

        _createClass(StartGame, [{
          key: "start",
          value: function start() {
            cc.director.preloadScene('mainGame');
          }
        }, {
          key: "StartGameScene",
          value: function StartGameScene(event, data) {
            cc.director.loadScene(data);
          }
        }]);

        return StartGame;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///SwitchRules.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, SwitchRules;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4690c2T/0lNSKS9//NK4ojq", "SwitchRules", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SwitchRules", SwitchRules = (_dec = ccclass('SwitchRules'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SwitchRules, _Component);

        function SwitchRules() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SwitchRules);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SwitchRules)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "sceneNode", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SwitchRules, [{
          key: "open",
          value: function open() {
            this.node.active = true;
            this.sceneNode.active = false;
          }
        }, {
          key: "close",
          value: function close() {
            this.node.active = false;
            this.sceneNode.active = true;
          }
        }]);

        return SwitchRules;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///test/MainGame_2.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, PhysicsSystem, systemEvent, SystemEvent, RigidBodyComponent, Vec3, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, MainGame_2;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fa2c5kajJ1AorT9k4+5zDwc", "MainGame_2", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainGame_2", MainGame_2 = (_dec = ccclass('MainGame_2'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainGame_2, _Component);

        function MainGame_2() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainGame_2);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainGame_2)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cube1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube3", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube4", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube5", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube6", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(MainGame_2, [{
          key: "onLoad",
          value: function onLoad() {
            // 物理引擎設定
            PhysicsSystem.instance.deltaTime = 1 / 30; // 添加TOUCH監聽
            // systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onKeyDown, this);
            // 添加鍵盤監聽

            systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.resetGame, this);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            for (var i = 1; i <= 6; i++) {
              this['cube' + i].getComponent(RigidBodyComponent).useGravity = true;
            }
          }
        }, {
          key: "resetGame",
          value: function resetGame(event) {
            switch (event.keyCode) {
              case cc.macro.KEY.w:
                cc.director.loadScene('mainGame_2');
                break;

              case cc.macro.KEY.q:
                for (var i = 1; i <= 6; i++) {
                  this['cube' + i].getComponent(RigidBodyComponent).useGravity = true;
                  this['cube' + i].getComponent(RigidBodyComponent).applyForce = new Vec3(0, 0, -3000);
                }

                break;
            }
          }
        }]);

        return MainGame_2;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cube1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cube2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cube3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cube4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cube5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cube6", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///test/MainGame_3.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, PhysicsSystem, systemEvent, SystemEvent, RigidBodyComponent, Vec3, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, MainGame_3;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b799dHetD5NGIDBJDATcmaR", "MainGame_3", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainGame_3", MainGame_3 = (_dec = ccclass('MainGame_3'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainGame_3, _Component);

        function MainGame_3() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainGame_3);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainGame_3)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cube1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube3", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube4", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube5", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube6", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(MainGame_3, [{
          key: "onLoad",
          value: function onLoad() {
            // 物理引擎設定
            PhysicsSystem.instance.deltaTime = 1 / 30; // 添加TOUCH監聽
            // systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onKeyDown, this);
            // 添加鍵盤監聽

            systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.resetGame, this);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            for (var i = 1; i <= 6; i++) {
              this['cube' + i].getComponent(RigidBodyComponent).useGravity = true; // 添加力

              this['cube' + i].getComponent(RigidBodyComponent).applyForce(new Vec3(0, 0, -3000));
            }
          }
        }, {
          key: "resetGame",
          value: function resetGame(event) {
            switch (event.keyCode) {
              case cc.macro.KEY.w:
                cc.director.loadScene('mainGame_3');
                break;

              case cc.macro.KEY.q:
                for (var i = 1; i <= 6; i++) {
                  this['cube' + i].getComponent(RigidBodyComponent).useGravity = true; // 添加力
                  // this['cube' + i].getComponent(RigidBodyComponent).applyForce(new Vec3(0, 0, -3000));
                }

                break;
            }
          }
        }]);

        return MainGame_3;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cube1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cube2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cube3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cube4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cube5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cube6", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///test/MainGame_4.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, systemEvent, SystemEvent, RigidBodyComponent, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, MainGame4;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "42d09gZYkxIxIlKxZJ8gHwA", "MainGame_4", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainGame4", MainGame4 = (_dec = ccclass('MainGame_4'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainGame4, _Component);

        function MainGame4() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainGame4);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainGame4)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cubeTest", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(MainGame4, [{
          key: "onLoad",
          value: function onLoad() {
            // 添加TOUCH監聽
            // systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onKeyDown, this);
            // 添加鍵盤監聽
            systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.resetGame, this);
          }
        }, {
          key: "resetGame",
          value: function resetGame(event) {
            switch (event.keyCode) {
              case cc.macro.KEY.w:
                cc.director.loadScene('mainGame_4');
                break;

              case cc.macro.KEY.q:
                for (var i = 1; i <= 6; i++) {
                  this.cubeTest.getComponent(RigidBodyComponent).useGravity = true;
                  /*setTimeout(() => {
                      this.cube.getComponent(AnimationComponent).play('animation_4_Cube_2');
                  }, 1500);*/
                }

                break;
            }
          }
        }]);

        return MainGame4;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubeTest", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cube", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///test/MainGame_5.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, systemEvent, SystemEvent, RigidBodyComponent, Vec3, AnimationComponent, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, MainGame_5;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
      AnimationComponent = _cc.AnimationComponent;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dad842mFxpN6LHHQ365S7M/", "MainGame_5", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainGame_5", MainGame_5 = (_dec = ccclass('MainGame_5'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainGame_5, _Component);

        function MainGame_5() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainGame_5);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainGame_5)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "cube1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube3", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube4", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube5", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cube6", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(MainGame_5, [{
          key: "onLoad",
          value: function onLoad() {
            // 添加TOUCH監聽
            // systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onKeyDown, this);
            // 添加鍵盤監聽
            systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.resetGame, this);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            for (var i = 1; i <= 6; i++) {
              this['cube' + i].getComponent(RigidBodyComponent).useGravity = true; // 添加力

              this['cube' + i].getComponent(RigidBodyComponent).applyForce(new Vec3(0, 0, -3000));
            }
          }
        }, {
          key: "resetGame",
          value: function resetGame(event) {
            switch (event.keyCode) {
              case cc.macro.KEY.w:
                cc.director.loadScene('mainGame_5');
                break;

              case cc.macro.KEY.q:
                for (var i = 1; i <= 6; i++) {
                  this['cube' + i].getComponent(AnimationComponent).play('animation_5_Cube_' + i);
                }

                break;
            }
          }
        }]);

        return MainGame_5;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cube1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cube2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cube3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cube4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cube5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cube6", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///test/Test.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CameraComponent, Vec3, systemEvent, SystemEvent, Component, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, Test;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      CameraComponent = _cc.CameraComponent;
      Vec3 = _cc.Vec3;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f47622b0+hBPqXxCvekTWpv", "Test", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property({
        type: CameraComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Test, _Component);

        function Test() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Test);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Test)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));

          _this.zPosition = 0;
          _this.offSet = new Vec3(0, 0, 0);
          _this.dragging = false;
          _this.mousePosition = new Vec3(0, 0, 0);
          return _this;
        }

        _createClass(Test, [{
          key: "onLoad",
          value: function onLoad() {
            // 添加TOUCH監聽
            systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onKeyDown, this);
            systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onKeyUp, this);
            this.zPosition = this.mainCamera.worldToScreen(this.node.position).z;
          }
        }, {
          key: "update",
          value: function update() {
            if (this.dragging) {
              var position = new Vec3(0, 0, 0);
              position.x = this.mousePosition.x;
              position.y = this.mousePosition.y;
              position.z = this.zPosition;
              var test = new Vec3(this.offSet.x, this.offSet.y, 0);
              var test1 = new Vec3(0, 0, 0); // Vec3.add(test1, position, test);
              // this.node.position = this.mainCamera.screenToWorld(test1);
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (!this.dragging) {
              this.beginDrag(event);
              this.mousePosition.x = event.getLocationX();
              this.mousePosition.y = event.getLocationY();
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp() {
            this.EndDrag();
          }
        }, {
          key: "beginDrag",
          value: function beginDrag(event) {
            this.dragging = true;
            var test = new Vec3(0, 0, 0);
            test.x = event.getLocationX();
            test.y = event.getLocationY();
            test.z = 0;
            var test1 = this.mainCamera.worldToScreen(this.node.position);
            Vec3.subtract(this.offSet, test, test1);
          }
        }, {
          key: "EndDrag",
          value: function EndDrag() {
            this.dragging = false;
          }
        }]);

        return Test;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///test/Test2.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, Test2;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4dfb9cwJtVBk4g953cU2sQL", "Test2", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Test2", Test2 = (_dec = ccclass('Test2'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(Test2, _Component);

        function Test2() {
          _classCallCheck(this, Test2);

          return _possibleConstructorReturn(this, _getPrototypeOf(Test2).apply(this, arguments));
        }

        _createClass(Test2, [{
          key: "beginDrag",

          /*public onLoad() {
              // 添加TOUCH監聽
              systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onKeyDown, this);
              systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.beginDrag, this);
          }
            private onKeyDown(event: Touch) {
              let test: Vec3 = new Vec3(this.GetMouseWorldPos(event).x, this.GetMouseWorldPos(event).y, 0);
              // let mOffSet = this.node.worldPosition - test
              let mOffSet
              Vec3.subtract(mOffSet, this.node.position, test)
          }
          private GetMouseWorldPos(event: Touch): Vec2 {
              let mousePoint: Vec2 = event.getLocation();
              return mousePoint;
          }*/
          value: function beginDrag(event) {}
        }]);

        return Test2;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Utils.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, Utils;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "583d96kKERGzIGa1LXGGPoL", "Utils", undefined);
      /**遊戲工具類 */


      _export("Utils", Utils = /*#__PURE__*/function () {
        function Utils() {
          _classCallCheck(this, Utils);
        }

        _createClass(Utils, null, [{
          key: "getRandomInt",

          /**隨機亂整數
          * @param min 最小值
          * @param max 最大值
          */
          value: function getRandomInt(min, max) {
            var r;
            r = Math.floor(Math.random() * (max - min + 1)) + min;
            return r;
          }
          /**
          * 骰子判斷邏輯
          */

        }, {
          key: "diceLogic",
          value: function diceLogic(dicePoints) {
            // 計算 1-6 點數次數
            var dicePoint1, dicePoint2, dicePoint3, dicePoint4, dicePoint5, dicePoint6;
            dicePoint1 = dicePoint2 = dicePoint3 = dicePoint4 = dicePoint5 = dicePoint6 = 0;
            var awords = '';

            for (var i = 0; i <= dicePoints.length; i++) {
              switch (dicePoints[i]) {
                case 1:
                  dicePoint1++;
                  break;

                case 2:
                  dicePoint2++;
                  break;

                case 3:
                  dicePoint3++;
                  break;

                case 4:
                  dicePoint4++;
                  break;

                case 5:
                  dicePoint5++;
                  break;

                case 6:
                  dicePoint6++;
                  break;
              }
            } // console.log('統計骰子點數', '1點:' + dicePoint1, ',2點:' + dicePoint2, ',3點:' + dicePoint3, ',4點:' + dicePoint4, ',5點:' + dicePoint5, '6點:' + dicePoint6);


            if (dicePoint4 == 4 && dicePoint1 == 2) {
              awords = '状元插金花';
            } else if (dicePoint4 == 6) {
              awords = '六杯红';
            } else if (dicePoint1 == 6) {
              awords = '遍地锦';
            } else if (dicePoint6 == 6) {
              awords = '六杯黑';
            } else if (dicePoint4 == 5) {
              awords = '五王';
            } else if (dicePoint3 == 5 && dicePoint4 == 1) {
              awords = '状元(带一秀)';
            } else if (dicePoint3 == 5) {
              awords = '状元(五子登科)';
            } else if (dicePoint4 == 4) {
              awords = '状元';
            } else if (dicePoint1 == 1 && dicePoint2 == 1 && dicePoint3 == 1 && dicePoint4 == 1 && dicePoint5 == 1 && dicePoint6 == 1) {
              awords = '对堂';
            } else if (dicePoint4 == 3) {
              awords = '三红';
            } else if (dicePoint5 == 4) {
              awords = '四进';
            } else if (dicePoint4 == 2) {
              awords = '二举';
            } else if (dicePoint4 == 1) {
              awords = '一秀';
            } else {
              awords = '哎呀, 再博一次吧~';
            }

            return awords;
          }
        }]);

        return Utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///MainGame.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc", "./Utils.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, MeshColliderComponent, ButtonComponent, Vec3, RigidBodyComponent, AnimationComponent, RichTextComponent, Component, Utils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, ccclass, property, MainGame;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      MeshColliderComponent = _cc.MeshColliderComponent;
      ButtonComponent = _cc.ButtonComponent;
      Vec3 = _cc.Vec3;
      RigidBodyComponent = _cc.RigidBodyComponent;
      AnimationComponent = _cc.AnimationComponent;
      RichTextComponent = _cc.RichTextComponent;
      Component = _cc.Component;
    }, function (_UtilsJs) {
      Utils = _UtilsJs.Utils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e22ef+ZVatIcLMSjDz1ugIu", "MainGame", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainGame", MainGame = (_dec = ccclass('MainGame'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: MeshColliderComponent
      }), _dec9 = property({
        type: ButtonComponent
      }), _dec10 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainGame, _Component);

        function MainGame() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainGame);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainGame)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "dice1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice3", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice4", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice5", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice6", _descriptor6, _assertThisInitialized(_this));

          _this.isFirstRollDice = true;
          _this.initDice1Pos = new Vec3(0, 0, 0);
          _this.initDice2Pos = new Vec3(0, 0, 0);
          _this.initDice3Pos = new Vec3(0, 0, 0);
          _this.initDice4Pos = new Vec3(0, 0, 0);
          _this.initDice5Pos = new Vec3(0, 0, 0);
          _this.initDice6Pos = new Vec3(0, 0, 0);
          _this.initDice1Rot = new Vec3(0, 0, 0);
          _this.initDice2Rot = new Vec3(0, 0, 0);
          _this.initDice3Rot = new Vec3(0, 0, 0);
          _this.initDice4Rot = new Vec3(0, 0, 0);
          _this.initDice5Rot = new Vec3(0, 0, 0);
          _this.initDice6Rot = new Vec3(0, 0, 0);
          _this.diceAnimation = true;
          _this.awordsAnimation = false;

          _initializerDefineProperty(_this, "bowlMeshCollider", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "startButton", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "awordsLabel", _descriptor9, _assertThisInitialized(_this));

          _this.enterNum = 0;
          return _this;
        }

        _createClass(MainGame, [{
          key: "onLoad",
          value: function onLoad() {
            // 物理引擎設定
            // let physicsSystem = PhysicsSystem.instance;
            // physicsSystem.deltaTime = 1 / 30;
            // physicsSystem.maxSubStep = 4;
            // 添加TOUCH監聽	
            // systemEvent.on(SystemEvent.EventType.TOUCH_START, this.startGame, this);	
            // 添加鍵盤監聽	
            // systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.resetGame, this);
            // 添加物理事件監聽
            this.bowlMeshCollider.on('onCollisionEnter', this.onCollisionEnter, this);
            this.bowlMeshCollider.on('onCollisionStay', this.onCollisionStay, this); // 紀錄初始位置	

            for (var i = 1; i <= 6; i++) {
              this['initDice' + i + 'Pos'] = new Vec3(this['dice' + i].position.x, this['dice' + i].position.y, this['dice' + i].position.z);
              this['initDice' + i + 'Rot'] = new Vec3(this['dice' + i].eulerAngles.x, this['dice' + i].eulerAngles.y, this['dice' + i].eulerAngles.z);
            } // 獎項文字初始化
            // this.awordsLabel.getComponent(RichTextComponent).string = '';


            this.awordsLabel.scale = new Vec3(0, 1, 1);
          }
        }, {
          key: "update",
          value: function update() {// 獲取線性速度

            /*let linearVelocity: Vec3 = new Vec3(0, 0, 0);
            this.dice1.getComponent(RigidBodyComponent).getLinearVelocity(linearVelocity)
            console.log(linearVelocity);*/
          }
        }, {
          key: "startGame",
          value: function startGame(event) {
            var _this2 = this;

            if (!this.startButton.interactable) {
              return;
            }

            if (this.isFirstRollDice) {
              // console.log('第一次骰');	
              this.startButton.interactable = false;
              this.isFirstRollDice = false;

              for (var i = 1; i <= 6; i++) {
                this['dice' + i].getComponent(RigidBodyComponent).wakeUp();
                this['dice' + i].getComponent(RigidBodyComponent).useGravity = true;
              }
            } else {
              // console.log('非第一次骰');
              this.startButton.interactable = false;
              this.awordsLabel.scale = new Vec3(0, 1, 1); // 回歸初始位置	

              for (var _i = 1; _i <= 6; _i++) {
                this['dice' + _i].getComponent(RigidBodyComponent).useGravity = false;
                this['dice' + _i].position = new Vec3(this['initDice' + _i + 'Pos'].x, this['initDice' + _i + 'Pos'].y, this['initDice' + _i + 'Pos'].z);
                this['dice' + _i].eulerAngles = new Vec3(this['initDice' + _i + 'Rot'].x, this['initDice' + _i + 'Rot'].y, this['initDice' + _i + 'Rot'].z);
              }

              setTimeout(function () {
                for (var _i2 = 1; _i2 <= 6; _i2++) {
                  _this2.bowlMeshCollider.on('onCollisionEnter', _this2.onCollisionEnter, _this2);

                  _this2['dice' + _i2].getComponent(RigidBodyComponent).useGravity = true;
                  _this2.diceAnimation = true;
                  _this2.awordsAnimation = false;
                }
              }, 250);
            }
          }
          /**物理碰撞進入 */

        }, {
          key: "onCollisionEnter",
          value: function onCollisionEnter(event) {
            console.log('Enter次數' + this.enterNum++);

            if (event.otherCollider.node.name == 'dice1') {
              this.bowlMeshCollider.off('onCollisionEnter', this.onCollisionEnter, this);

              if (this.diceAnimation) {
                this.diceAnimation = false; // 骰子1-6 顆

                var dicePoints = [];

                for (var i = 0; i < 6; i++) {
                  // 骰子1-6 動畫
                  var randomNum = Utils.getRandomInt(1, 6);
                  event.otherCollider.node.parent.children[i].getComponent(AnimationComponent).play('animation_Dice_' + randomNum);
                  dicePoints.push(randomNum); // let diceNum = i + 1;
                } // console.log('骰子點數' + dicePoints);


                this.awordsLabel.getComponent(RichTextComponent).string = '<b><outline color=#b8860b width=4><color=yellow>' + Utils.diceLogic(dicePoints) + '</color></outline></b>';
              }
            }
          }
          /**物理碰撞保持 */

        }, {
          key: "onCollisionStay",
          value: function onCollisionStay(event) {
            if (this.awordsAnimation) {
              return;
            }

            if (event.otherCollider.node.name == 'dice1') {
              if (this.dice1.getComponent(RigidBodyComponent).isSleepy) {
                this.startButton.interactable = true;
                this.awordsAnimation = true;
                this.awordsLabel.getComponent(AnimationComponent).play();
              }
            }
          }
          /*private resetGame(event: any) {	
              switch (event.keyCode) {	
                  case cc.macro.KEY.w:	
                      cc.director.loadScene('mainGame');	
                      break;	
                  case cc.macro.KEY.q:	
                      for (let i = 1; i <= 6; i++) {	
                          this['dice' + i].getComponent(RigidBodyComponent).useGravity = true;	
                      }	
                      break;	
              }	
          }*/

        }]);

        return MainGame;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dice1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dice2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dice3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dice4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dice5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dice6", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bowlMeshCollider", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "startButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "awordsLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prerequisite-imports:main", ["../Constants.js", "../Rules.js", "../StartGame.js", "../SwitchRules.js", "../test/MainGame_2.js", "../test/MainGame_3.js", "../test/MainGame_4.js", "../test/MainGame_5.js", "../test/Test.js", "../test/Test2.js", "../Utils.js", "../MainGame.js"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_ConstantsJs) {}, function (_RulesJs) {}, function (_StartGameJs) {}, function (_SwitchRulesJs) {}, function (_testMainGame_2Js) {}, function (_testMainGame_3Js) {}, function (_testMainGame_4Js) {}, function (_testMainGame_5Js) {}, function (_testTestJs) {}, function (_testTest2Js) {}, function (_UtilsJs) {}, function (_MainGameJs) {}],
    execute: function () {}
  };
});

(function(r) {
  r('project:///assets/src/Constants.js', 'chunks:///Constants.js');
  r('project:///assets/src/Rules.js', 'chunks:///Rules.js');
  r('project:///assets/src/StartGame.js', 'chunks:///StartGame.js');
  r('project:///assets/src/SwitchRules.js', 'chunks:///SwitchRules.js');
  r('project:///assets/src/test/MainGame_2.js', 'chunks:///test/MainGame_2.js');
  r('project:///assets/src/test/MainGame_3.js', 'chunks:///test/MainGame_3.js');
  r('project:///assets/src/test/MainGame_4.js', 'chunks:///test/MainGame_4.js');
  r('project:///assets/src/test/MainGame_5.js', 'chunks:///test/MainGame_5.js');
  r('project:///assets/src/test/Test.js', 'chunks:///test/Test.js');
  r('project:///assets/src/test/Test2.js', 'chunks:///test/Test2.js');
  r('project:///assets/src/Utils.js', 'chunks:///Utils.js');
  r('project:///assets/src/MainGame.js', 'chunks:///MainGame.js');
  r('virtual:///prerequisite-imports:main', 'chunks:///_virtual/prerequisite-imports:main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    var _m;
    return {
        setters: [function(m) { _m = m; }],
        execute: function () { _export(_m); }
    };
    });
});
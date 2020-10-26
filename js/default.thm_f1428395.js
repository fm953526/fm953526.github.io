window.skins=window.skins||{};
window.public=window.public||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","startGameSceneSkin":"resource/skins/startGameSceneSkin.exml","gameSceneView":"resource/skins/gameSceneView.exml","blockSkin":"resource/skins/blockSkin.exml","SlotListSkin":"resource/skins/SlotListSkin.exml","SlotMachineSkin":"resource/skins/SlotMachineSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.alpha = 0;
		t.autoVisibility = true;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.alpha = 0;
		t.autoVisibility = true;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AlertSkin.exml'] = window.AlertSkin = (function (_super) {
	__extends(AlertSkin, _super);
	var AlertSkin$Skin1 = 	(function (_super) {
		__extends(AlertSkin$Skin1, _super);
		function AlertSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AlertSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sxbjl_windows_tips_confirm_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AlertSkin$Skin1;
	})(eui.Skin);

	function AlertSkin() {
		_super.call(this);
		this.skinParts = ["okButton","messageLabel"];
		
		this.elementsContent = [this._Image1_i(),this.okButton_i(),this.messageLabel_i()];
	}
	var _proto = AlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sxbjl_windows_tips_bg_png";
		t.verticalCenter = 9;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.okButton_i = function () {
		var t = new eui.Button();
		this.okButton = t;
		t.bottom = 33;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = AlertSkin$Skin1;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.Label();
		this.messageLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 221;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 570;
		return t;
	};
	return AlertSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoaddingSkin.exml'] = window.LoaddingSkin = (function (_super) {
	__extends(LoaddingSkin, _super);
	function LoaddingSkin() {
		_super.call(this);
		this.skinParts = ["loadding","progressTxt"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.loadding_i(),this.progressTxt_i()];
	}
	var _proto = LoaddingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.loadding_i = function () {
		var t = new uiCore.Animation();
		this.loadding = t;
		t.animationSource = "loading{0}_png";
		t.autoPlay = true;
		t.frameNum = 8;
		t.frameRate = 200;
		t.horizontalCenter = 0;
		t.loop = true;
		t.source = "loading0_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.progressTxt_i = function () {
		var t = new eui.Label();
		this.progressTxt = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "100%";
		t.verticalCenter = 0;
		return t;
	};
	return LoaddingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/item/SXBJLTinyChipSkin.exml'] = window.SXBJLTinyChipSkin = (function (_super) {
	__extends(SXBJLTinyChipSkin, _super);
	function SXBJLTinyChipSkin() {
		_super.call(this);
		this.skinParts = ["img_chip_bg","img_chip_select","g_effect","g_chip"];
		
		this.height = 150;
		this.width = 148;
		this.elementsContent = [this.g_chip_i()];
	}
	var _proto = SXBJLTinyChipSkin.prototype;

	_proto.g_chip_i = function () {
		var t = new eui.Group();
		this.g_chip = t;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_chip_bg_i(),this.img_chip_select_i(),this.g_effect_i()];
		return t;
	};
	_proto.img_chip_bg_i = function () {
		var t = new eui.Image();
		this.img_chip_bg = t;
		t.horizontalCenter = 0;
		t.source = "sxbjl_game_chip_1000_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_chip_select_i = function () {
		var t = new eui.Image();
		this.img_chip_select = t;
		t.includeInLayout = false;
		t.source = "sxbjl_game_chip_xuanzhong_png";
		t.visible = false;
		t.x = -22;
		t.y = -20;
		return t;
	};
	_proto.g_effect_i = function () {
		var t = new eui.Group();
		this.g_effect = t;
		t.height = 0;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 0;
		return t;
	};
	return SXBJLTinyChipSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/SXBJLBetChoumaSkin.exml'] = window.SXBJLBetChoumaSkin = (function (_super) {
	__extends(SXBJLBetChoumaSkin, _super);
	function SXBJLBetChoumaSkin() {
		_super.call(this);
		this.skinParts = ["g_chouma","g_content"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SXBJLBetChoumaSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.g_content_i(),this._Image1_i()];
		return t;
	};
	_proto.g_content_i = function () {
		var t = new eui.Group();
		this.g_content = t;
		t.bottom = -15;
		t.horizontalCenter = 0;
		t.elementsContent = [this.g_chouma_i()];
		return t;
	};
	_proto.g_chouma_i = function () {
		var t = new eui.Group();
		this.g_chouma = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._SXBJLTinyChipView1_i(),this._SXBJLTinyChipView2_i(),this._SXBJLTinyChipView3_i(),this._SXBJLTinyChipView4_i(),this._SXBJLTinyChipView5_i(),this._SXBJLTinyChipView6_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 48;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._SXBJLTinyChipView1_i = function () {
		var t = new sxbjl.SXBJLTinyChipView();
		t.skinName = "SXBJLTinyChipSkin";
		t.x = 954;
		t.y = 100;
		return t;
	};
	_proto._SXBJLTinyChipView2_i = function () {
		var t = new sxbjl.SXBJLTinyChipView();
		t.skinName = "SXBJLTinyChipSkin";
		t.x = 795;
		t.y = 243;
		return t;
	};
	_proto._SXBJLTinyChipView3_i = function () {
		var t = new sxbjl.SXBJLTinyChipView();
		t.skinName = "SXBJLTinyChipSkin";
		t.x = 636;
		t.y = 386;
		return t;
	};
	_proto._SXBJLTinyChipView4_i = function () {
		var t = new sxbjl.SXBJLTinyChipView();
		t.skinName = "SXBJLTinyChipSkin";
		t.x = 477;
		t.y = 529;
		return t;
	};
	_proto._SXBJLTinyChipView5_i = function () {
		var t = new sxbjl.SXBJLTinyChipView();
		t.skinName = "SXBJLTinyChipSkin";
		t.x = 318;
		t.y = 672;
		return t;
	};
	_proto._SXBJLTinyChipView6_i = function () {
		var t = new sxbjl.SXBJLTinyChipView();
		t.skinName = "SXBJLTinyChipSkin";
		t.x = 159;
		t.y = 815;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "sxbjl_game_chip_bg_png";
		t.touchEnabled = false;
		t.x = 0;
		return t;
	};
	return SXBJLBetChoumaSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/BJLBetAreaSkin.exml'] = window.BJLBetAreaSkin = (function (_super) {
	__extends(BJLBetAreaSkin, _super);
	function BJLBetAreaSkin() {
		_super.call(this);
		this.skinParts = ["img_light_xian","txt_gold_xian","g_click_xian","img_light_zhuang","txt_gold_zhuang","g_click_zhuang","img_light_xiandui","txt_gold_xiandui","g_click_xiandui","img_light_zhuangdui","txt_gold_zhuangdui","g_click_zhuangdui","img_light_he","txt_gold_he","g_click_he","g_bet"];
		
		this.elementsContent = [this.g_bet_i()];
	}
	var _proto = BJLBetAreaSkin.prototype;

	_proto.g_bet_i = function () {
		var t = new eui.Group();
		this.g_bet = t;
		t.height = 550;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1460;
		t.elementsContent = [this.g_click_xian_i(),this.g_click_zhuang_i(),this.g_click_xiandui_i(),this.g_click_zhuangdui_i(),this.g_click_he_i()];
		return t;
	};
	_proto.g_click_xian_i = function () {
		var t = new eui.Group();
		this.g_click_xian = t;
		t.left = 0;
		t.top = 0;
		t.elementsContent = [this.img_light_xian_i(),this.txt_gold_xian_i()];
		return t;
	};
	_proto.img_light_xian_i = function () {
		var t = new eui.Image();
		this.img_light_xian = t;
		t.horizontalCenter = 0;
		t.source = "glow_3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_gold_xian_i = function () {
		var t = new eui.Label();
		this.txt_gold_xian = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.text = "0/0";
		t.top = 10;
		return t;
	};
	_proto.g_click_zhuang_i = function () {
		var t = new eui.Group();
		this.g_click_zhuang = t;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_light_zhuang_i(),this.txt_gold_zhuang_i()];
		return t;
	};
	_proto.img_light_zhuang_i = function () {
		var t = new eui.Image();
		this.img_light_zhuang = t;
		t.horizontalCenter = 0;
		t.source = "glow_3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_gold_zhuang_i = function () {
		var t = new eui.Label();
		this.txt_gold_zhuang = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0/0";
		t.top = 10;
		t.x = -824.0000000000001;
		t.y = 10;
		return t;
	};
	_proto.g_click_xiandui_i = function () {
		var t = new eui.Group();
		this.g_click_xiandui = t;
		t.bottom = 0;
		t.left = 0;
		t.elementsContent = [this.img_light_xiandui_i(),this.txt_gold_xiandui_i()];
		return t;
	};
	_proto.img_light_xiandui_i = function () {
		var t = new eui.Image();
		this.img_light_xiandui = t;
		t.horizontalCenter = 0;
		t.source = "glow_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_gold_xiandui_i = function () {
		var t = new eui.Label();
		this.txt_gold_xiandui = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0/0";
		t.top = 10;
		t.x = 196.00000000000003;
		t.y = -310;
		return t;
	};
	_proto.g_click_zhuangdui_i = function () {
		var t = new eui.Group();
		this.g_click_zhuangdui = t;
		t.bottom = 0;
		t.right = 0;
		t.elementsContent = [this.img_light_zhuangdui_i(),this.txt_gold_zhuangdui_i()];
		return t;
	};
	_proto.img_light_zhuangdui_i = function () {
		var t = new eui.Image();
		this.img_light_zhuangdui = t;
		t.horizontalCenter = 0;
		t.source = "glow_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_gold_zhuangdui_i = function () {
		var t = new eui.Label();
		this.txt_gold_zhuangdui = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0/0";
		t.top = 10;
		t.x = -824.0000000000001;
		t.y = -310;
		return t;
	};
	_proto.g_click_he_i = function () {
		var t = new eui.Group();
		this.g_click_he = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this.img_light_he_i(),this.txt_gold_he_i()];
		return t;
	};
	_proto.img_light_he_i = function () {
		var t = new eui.Image();
		this.img_light_he = t;
		t.horizontalCenter = 0;
		t.source = "glow_2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_gold_he_i = function () {
		var t = new eui.Label();
		this.txt_gold_he = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0/0";
		t.top = 10;
		t.x = -255.99999999999997;
		t.y = -310;
		return t;
	};
	return BJLBetAreaSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/SXBJLGameAllRoadInfoSmallSkin.exml'] = window.SXBJLGameAllRoadInfoSmallSkin = (function (_super) {
	__extends(SXBJLGameAllRoadInfoSmallSkin, _super);
	var SXBJLGameAllRoadInfoSmallSkin$Skin2 = 	(function (_super) {
		__extends(SXBJLGameAllRoadInfoSmallSkin$Skin2, _super);
		function SXBJLGameAllRoadInfoSmallSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SXBJLGameAllRoadInfoSmallSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_cancel_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SXBJLGameAllRoadInfoSmallSkin$Skin2;
	})(eui.Skin);

	function SXBJLGameAllRoadInfoSmallSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeButton","g_road1","img_newroad1","g_road2","img_newroad2","g_road3","img_newroad3","g_road4","img_newroad4","g_road5","img_newroad5","btn_zhuangwenlu","btn_xianwenlu","g_info","txt_zhuang","txt_xian","txt_he","txt_zhuangdui","txt_xiandui","txt_all"];
		
		this.height = 206;
		this.elementsContent = [this.g_info_i(),this._Group7_i(),this._Group14_i()];
	}
	var _proto = SXBJLGameAllRoadInfoSmallSkin.prototype;

	_proto.g_info_i = function () {
		var t = new eui.Group();
		this.g_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 160;
		t.touchEnabled = false;
		t.width = 1026;
		t.x = 0;
		t.elementsContent = [this.bg_i(),this.closeButton_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_ludan_bg_png";
		t.x = -1.33;
		t.y = 0;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new uiCore.Button();
		this.closeButton = t;
		t.right = 50;
		t.soundPath = "sxbrnnii_button_common_mp3";
		t.top = 40;
		t.visible = false;
		t.skinName = SXBJLGameAllRoadInfoSmallSkin$Skin2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -128.5;
		t.verticalCenter = 0;
		t.elementsContent = [this.g_road1_i(),this.img_newroad1_i()];
		return t;
	};
	_proto.g_road1_i = function () {
		var t = new eui.Group();
		this.g_road1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 357;
		return t;
	};
	_proto.img_newroad1_i = function () {
		var t = new eui.Image();
		this.img_newroad1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 164;
		t.y = 1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.g_road2_i(),this.img_newroad2_i()];
		return t;
	};
	_proto.g_road2_i = function () {
		var t = new eui.Group();
		this.g_road2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 205;
		return t;
	};
	_proto.img_newroad2_i = function () {
		var t = new eui.Image();
		this.img_newroad2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 77;
		t.y = 1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 177;
		t.verticalCenter = 0;
		t.elementsContent = [this.g_road3_i(),this.img_newroad3_i()];
		return t;
	};
	_proto.g_road3_i = function () {
		var t = new eui.Group();
		this.g_road3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.width = 254.67;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_newroad3_i = function () {
		var t = new eui.Image();
		this.img_newroad3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 69;
		t.y = 1;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.g_road4_i(),this.img_newroad4_i()];
		return t;
	};
	_proto.g_road4_i = function () {
		var t = new eui.Group();
		this.g_road4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 207;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_newroad4_i = function () {
		var t = new eui.Image();
		this.img_newroad4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 58;
		t.y = 1;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.right = 0;
		t.elementsContent = [this.g_road5_i(),this.img_newroad5_i()];
		return t;
	};
	_proto.g_road5_i = function () {
		var t = new eui.Group();
		this.g_road5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 207;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_newroad5_i = function () {
		var t = new eui.Image();
		this.img_newroad5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 20;
		t.y = 1;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.right = 20;
		t.visible = false;
		t.y = 350;
		t.elementsContent = [this.btn_zhuangwenlu_i(),this.btn_xianwenlu_i()];
		return t;
	};
	_proto.btn_zhuangwenlu_i = function () {
		var t = new uiCore.Button();
		this.btn_zhuangwenlu = t;
		t.right = 0;
		t.soundPath = "sxbrnnii_button_common_mp3";
		t.y = 0;
		return t;
	};
	_proto.btn_xianwenlu_i = function () {
		var t = new uiCore.Button();
		this.btn_xianwenlu = t;
		t.right = 0;
		t.soundPath = "sxbrnnii_button_common_mp3";
		t.y = 100;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 112;
		t.y = 11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 122;
		t.y = 21;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 132;
		t.y = 31;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 142;
		t.y = 41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 152;
		t.y = 51;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 162;
		t.y = 61;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 5;
		t.visible = true;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 75;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.width = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.txt_zhuang_i()];
		return t;
	};
	_proto.txt_zhuang_i = function () {
		var t = new eui.Label();
		this.txt_zhuang = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "莊: 34";
		t.textColor = 0xff7f8c;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.width = 100;
		t.x = 0;
		t.y = 20;
		t.elementsContent = [this.txt_xian_i()];
		return t;
	};
	_proto.txt_xian_i = function () {
		var t = new eui.Label();
		this.txt_xian = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "閒: 34";
		t.textColor = 0x6d8aff;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.width = 100;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this.txt_he_i()];
		return t;
	};
	_proto.txt_he_i = function () {
		var t = new eui.Label();
		this.txt_he = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0x018780;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.width = 100;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.txt_zhuangdui_i()];
		return t;
	};
	_proto.txt_zhuangdui_i = function () {
		var t = new eui.Label();
		this.txt_zhuangdui = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0xff7f8c;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.width = 100;
		t.x = 10;
		t.y = 30;
		t.elementsContent = [this.txt_xiandui_i()];
		return t;
	};
	_proto.txt_xiandui_i = function () {
		var t = new eui.Label();
		this.txt_xiandui = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0x6d8aff;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.width = 100;
		t.x = 0;
		t.y = 60;
		t.elementsContent = [this.txt_all_i()];
		return t;
	};
	_proto.txt_all_i = function () {
		var t = new eui.Label();
		this.txt_all = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0xe5b7df;
		t.y = 0;
		return t;
	};
	return SXBJLGameAllRoadInfoSmallSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/SXBJLGameRoadInfoSkin.exml'] = window.SXBJLGameRoadInfoSkin = (function (_super) {
	__extends(SXBJLGameRoadInfoSkin, _super);
	function SXBJLGameRoadInfoSkin() {
		_super.call(this);
		this.skinParts = ["bg","g_road","img_newroad","g_info","tab_ludan","txt_zhuang","txt_xian","txt_he","txt_zhuangdui","txt_xiandui","txt_all","btn_zhuangwenlu","btn_xianwenlu","allRoadView","g_road_small"];
		
		this.elementsContent = [this.g_road_small_i()];
	}
	var _proto = SXBJLGameRoadInfoSkin.prototype;

	_proto.g_road_small_i = function () {
		var t = new eui.Group();
		this.g_road_small = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.g_info_i(),this.tab_ludan_i(),this._Group8_i(),this._Group9_i(),this.allRoadView_i(),this._Group10_i()];
		return t;
	};
	_proto.g_info_i = function () {
		var t = new eui.Group();
		this.g_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.right = 0;
		t.touchEnabled = false;
		t.elementsContent = [this.bg_i(),this.g_road_i(),this._Group1_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_ludan_bg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.g_road_i = function () {
		var t = new eui.Group();
		this.g_road = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.img_newroad_i()];
		return t;
	};
	_proto.img_newroad_i = function () {
		var t = new eui.Image();
		this.img_newroad = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tab_ludan_i = function () {
		var t = new eui.TabBar();
		this.tab_ludan = t;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = SXBJLGameRoadTabBtnSkin;
		t.selectedIndex = 1;
		t.x = -1;
		t.y = 2;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.iconDown = "sxbjl_game_roadlist_btn_zhankai_allroad01_png";
		t.iconUp = "sxbjl_game_roadlist_btn_zhankai_allroad_png";
		t.ludan = "1";
		t.name = "全路";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.iconDown = "sxbjl_game_roadlist_btn_zhankai_dalu01_png";
		t.iconUp = "sxbjl_game_roadlist_btn_zhankai_dalu_png";
		t.ludan = "2";
		t.name = "大路";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.iconDown = "sxbjl_game_roadlist_btn_zhankai_zhupanlu01_png";
		t.iconUp = "sxbjl_game_roadlist_btn_zhankai_zhupanlu_png";
		t.ludan = "3";
		t.name = "珠盘路";
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.right = 61;
		t.top = 34;
		t.visible = false;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 4.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 70;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this.txt_zhuang_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 15;
		t.text = "庄";
		t.textColor = 0xd0081b;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_zhuang_i = function () {
		var t = new eui.Label();
		this.txt_zhuang = t;
		t.fontFamily = "SimHei";
		t.right = 0;
		t.size = 15;
		t.text = "34";
		t.textColor = 0xD0081B;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 70;
		t.x = 0;
		t.y = 20;
		t.elementsContent = [this._Label2_i(),this.txt_xian_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 15;
		t.text = "闲";
		t.textColor = 0x1a37b3;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_xian_i = function () {
		var t = new eui.Label();
		this.txt_xian = t;
		t.fontFamily = "SimHei";
		t.right = 0;
		t.size = 15;
		t.text = "34";
		t.textColor = 0x1a37b3;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.width = 70;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this._Label3_i(),this.txt_he_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 15;
		t.text = "和";
		t.textColor = 0x018780;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_he_i = function () {
		var t = new eui.Label();
		this.txt_he = t;
		t.fontFamily = "SimHei";
		t.right = 0;
		t.size = 15;
		t.text = "34";
		t.textColor = 0x018780;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.width = 70;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Label4_i(),this.txt_zhuangdui_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 15;
		t.text = "庄对";
		t.textColor = 0xD0081B;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_zhuangdui_i = function () {
		var t = new eui.Label();
		this.txt_zhuangdui = t;
		t.fontFamily = "SimHei";
		t.right = 0;
		t.size = 15;
		t.text = "34";
		t.textColor = 0xD0081B;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.width = 70;
		t.x = 10;
		t.y = 30;
		t.elementsContent = [this._Label5_i(),this.txt_xiandui_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 15;
		t.text = "闲对";
		t.textColor = 0x1A37B3;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_xiandui_i = function () {
		var t = new eui.Label();
		this.txt_xiandui = t;
		t.fontFamily = "SimHei";
		t.right = 0;
		t.size = 15;
		t.text = "34";
		t.textColor = 0x1A37B3;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.width = 70;
		t.x = 0;
		t.y = 60;
		t.elementsContent = [this._Label6_i(),this.txt_all_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 15;
		t.text = "统计";
		t.textColor = 0x1d2020;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_all_i = function () {
		var t = new eui.Label();
		this.txt_all = t;
		t.fontFamily = "SimHei";
		t.right = 0;
		t.size = 15;
		t.text = "34";
		t.textColor = 0x1d2020;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.right = 6;
		t.visible = false;
		t.y = 38;
		t.elementsContent = [this.btn_zhuangwenlu_i(),this.btn_xianwenlu_i()];
		return t;
	};
	_proto.btn_zhuangwenlu_i = function () {
		var t = new uiCore.Button();
		this.btn_zhuangwenlu = t;
		t.soundPath = "sxbrnnii_button_common_mp3";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_xianwenlu_i = function () {
		var t = new uiCore.Button();
		this.btn_xianwenlu = t;
		t.soundPath = "sxbrnnii_button_common_mp3";
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto.allRoadView_i = function () {
		var t = new sxbjl.SXBJLGameAllRoadInfoView();
		this.allRoadView = t;
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "SXBJLGameAllRoadInfoSmallSkin";
		t.x = 210;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.top = 5;
		t.visible = false;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 112;
		t.y = 11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 122;
		t.y = 21;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 132;
		t.y = 31;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 142;
		t.y = 41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 152;
		t.y = 51;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_roadlist_bg_png";
		t.x = 162;
		t.y = 61;
		return t;
	};
	return SXBJLGameRoadInfoSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/SXBJLGameCardResultSkin.exml'] = window.SXBJLGameCardResultSkin = (function (_super) {
	__extends(SXBJLGameCardResultSkin, _super);
	function SXBJLGameCardResultSkin() {
		_super.call(this);
		this.skinParts = ["img_card_xian1","img_card_xian2","img_card_xian3","g_card_xian3","img_xian_win","txt_xian_point","img_card_zhuang1","img_card_zhuang2","img_card_zhuang3","g_card_zhuang3","img_zhuang_win","txt_zhuang_point","img_he_win","g_info"];
		
		this.height = 310;
		this.width = 520;
		this.elementsContent = [this.g_info_i()];
	}
	var _proto = SXBJLGameCardResultSkin.prototype;

	_proto.g_info_i = function () {
		var t = new eui.Group();
		this.g_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 520;
		t.elementsContent = [this._Group6_i(),this._Group12_i(),this.img_he_win_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.y = 0;
		t.elementsContent = [this._Group5_i(),this.img_xian_win_i(),this.txt_xian_point_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.y = 20;
		t.elementsContent = [this._Group4_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group3_i(),this.g_card_xian3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 90;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 158;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_card_xian1_i()];
		return t;
	};
	_proto.img_card_xian1_i = function () {
		var t = new eui.Image();
		this.img_card_xian1 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 79;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker_card_back_png";
		t.width = 116;
		t.x = 58;
		t.y = 79;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 158;
		t.width = 116;
		t.x = 135;
		t.y = 0;
		t.elementsContent = [this.img_card_xian2_i()];
		return t;
	};
	_proto.img_card_xian2_i = function () {
		var t = new eui.Image();
		this.img_card_xian2 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 79;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker_card_back_png";
		t.width = 116;
		t.x = 58;
		t.y = 79;
		return t;
	};
	_proto.g_card_xian3_i = function () {
		var t = new eui.Group();
		this.g_card_xian3 = t;
		t.height = 116;
		t.includeInLayout = true;
		t.width = 158;
		t.x = 90;
		t.y = 0;
		t.elementsContent = [this.img_card_xian3_i()];
		return t;
	};
	_proto.img_card_xian3_i = function () {
		var t = new eui.Image();
		this.img_card_xian3 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 79;
		t.height = 158;
		t.rotation = 270;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker_card_back_png";
		t.width = 116;
		t.x = 79;
		t.y = 58;
		return t;
	};
	_proto.img_xian_win_i = function () {
		var t = new eui.Image();
		this.img_xian_win = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		return t;
	};
	_proto.txt_xian_point_i = function () {
		var t = new eui.Label();
		this.txt_xian_point = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "闲4点";
		t.textColor = 0xff9b9b;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.elementsContent = [this._Group11_i(),this.img_zhuang_win_i(),this.txt_zhuang_point_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.y = 20;
		t.elementsContent = [this._Group10_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group9_i(),this.g_card_zhuang3_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 90;
		t.y = 0;
		t.elementsContent = [this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 158;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_card_zhuang1_i()];
		return t;
	};
	_proto.img_card_zhuang1_i = function () {
		var t = new eui.Image();
		this.img_card_zhuang1 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 79;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker_card_back_png";
		t.width = 116;
		t.x = 58;
		t.y = 79;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 158;
		t.width = 116;
		t.x = 135;
		t.y = 0;
		t.elementsContent = [this.img_card_zhuang2_i()];
		return t;
	};
	_proto.img_card_zhuang2_i = function () {
		var t = new eui.Image();
		this.img_card_zhuang2 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 79;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker_card_back_png";
		t.width = 116;
		t.x = 58;
		t.y = 79;
		return t;
	};
	_proto.g_card_zhuang3_i = function () {
		var t = new eui.Group();
		this.g_card_zhuang3 = t;
		t.height = 116;
		t.includeInLayout = true;
		t.width = 158;
		t.x = 90;
		t.y = 0;
		t.elementsContent = [this.img_card_zhuang3_i()];
		return t;
	};
	_proto.img_card_zhuang3_i = function () {
		var t = new eui.Image();
		this.img_card_zhuang3 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 79;
		t.height = 158;
		t.rotation = 270;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker_card_back_png";
		t.width = 116;
		t.x = 79;
		t.y = 58;
		return t;
	};
	_proto.img_zhuang_win_i = function () {
		var t = new eui.Image();
		this.img_zhuang_win = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		return t;
	};
	_proto.txt_zhuang_point_i = function () {
		var t = new eui.Label();
		this.txt_zhuang_point = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "闲4点";
		t.textColor = 0xffb530;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_he_win_i = function () {
		var t = new eui.Image();
		this.img_he_win = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return SXBJLGameCardResultSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/BJLGameChangeTableSkin.exml'] = window.BJLGameChangeTableSkin = (function (_super) {
	__extends(BJLGameChangeTableSkin, _super);
	var BJLGameChangeTableSkin$Skin3 = 	(function (_super) {
		__extends(BJLGameChangeTableSkin$Skin3, _super);
		function BJLGameChangeTableSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLGameChangeTableSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bjl_game_changtable_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLGameChangeTableSkin$Skin3;
	})(eui.Skin);

	var BJLGameChangeTableSkin$Skin4 = 	(function (_super) {
		__extends(BJLGameChangeTableSkin$Skin4, _super);
		function BJLGameChangeTableSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLGameChangeTableSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bjl_game_changtable_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLGameChangeTableSkin$Skin4;
	})(eui.Skin);

	function BJLGameChangeTableSkin() {
		_super.call(this);
		this.skinParts = ["btn_hide","tableList","tableListScroller","tableListGroup","g_detail","btn_show"];
		
		this.height = 1080;
		this.elementsContent = [this.g_detail_i(),this.btn_show_i()];
	}
	var _proto = BJLGameChangeTableSkin.prototype;

	_proto.g_detail_i = function () {
		var t = new eui.Group();
		this.g_detail = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.top = 0;
		t.visible = false;
		t.width = 561;
		t.x = -35;
		t.elementsContent = [this.btn_hide_i(),this._Image1_i(),this.tableListGroup_i()];
		return t;
	};
	_proto.btn_hide_i = function () {
		var t = new uiCore.Button();
		this.btn_hide = t;
		t.left = 13;
		t.verticalCenter = -220;
		t.skinName = BJLGameChangeTableSkin$Skin3;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.source = "bjl_game_changtable_bg_png";
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto.tableListGroup_i = function () {
		var t = new eui.Group();
		this.tableListGroup = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 33;
		t.top = 0;
		t.visible = true;
		t.width = 480;
		t.y = 0;
		t.elementsContent = [this.tableListScroller_i()];
		return t;
	};
	_proto.tableListScroller_i = function () {
		var t = new eui.Scroller();
		this.tableListScroller = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.percentWidth = 100;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.tableList_i()];
		return t;
	};
	_proto.tableList_i = function () {
		var t = new eui.List();
		this.tableList = t;
		t.horizontalCenter = 0;
		t.itemRenderer = BJLRoomItemRender;
		t.itemRendererSkinName = BJLGameTableItemSkin;
		t.selectedIndex = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 25;
		t.horizontalAlign = "center";
		t.paddingBottom = 10;
		t.paddingTop = 22;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.test = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.test = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.test = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.test = "";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.test = "";
		return t;
	};
	_proto.btn_show_i = function () {
		var t = new uiCore.Button();
		this.btn_show = t;
		t.right = 0;
		t.verticalCenter = -220;
		t.skinName = BJLGameChangeTableSkin$Skin4;
		return t;
	};
	return BJLGameChangeTableSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/BJLGameSceneSkin.exml'] = window.BJLGameSceneSkin = (function (_super) {
	__extends(BJLGameSceneSkin, _super);
	var BJLGameSceneSkin$Skin5 = 	(function (_super) {
		__extends(BJLGameSceneSkin$Skin5, _super);
		function BJLGameSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_player_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLGameSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_player_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLGameSceneSkin$Skin5;
	})(eui.Skin);

	var BJLGameSceneSkin$Skin6 = 	(function (_super) {
		__extends(BJLGameSceneSkin$Skin6, _super);
		function BJLGameSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLGameSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_full_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLGameSceneSkin$Skin6;
	})(eui.Skin);

	var BJLGameSceneSkin$Skin7 = 	(function (_super) {
		__extends(BJLGameSceneSkin$Skin7, _super);
		function BJLGameSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLGameSceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sxbjl_game_toux_btn_caidan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLGameSceneSkin$Skin7;
	})(eui.Skin);

	function BJLGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","dealer","img_status","betChoumaView","img_header","userName","txt_gold","userInfo","progressTimeTxt","progressTimerGroup","betAreaView","btn_player","choumaGroup1","choumaGroup2","choumaGroup3","choumaGroup4","choumaGroup5","gameRoadView","gameCardResultView","backButton","settingBtn","helpButton","gameRecord","gameSuggest","backMenuGroup","img_startBetting","startBetGroup","btn_allRoad","btn_menu","gameChangeTableView","wrap"];
		
		this.elementsContent = [this.wrap_i()];
	}
	var _proto = BJLGameSceneSkin.prototype;

	_proto.wrap_i = function () {
		var t = new eui.Group();
		this.wrap = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = true;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this.dealer_i(),this.img_status_i(),this.betChoumaView_i(),this._Image2_i(),this.userInfo_i(),this.progressTimerGroup_i(),this.betAreaView_i(),this.btn_player_i(),this._Group2_i(),this.gameRoadView_i(),this._Group3_i(),this.gameCardResultView_i(),this.backMenuGroup_i(),this.startBetGroup_i(),this.btn_allRoad_i(),this.btn_menu_i(),this.gameChangeTableView_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "table_png";
		t.top = 0;
		t.x = 54;
		t.y = 0;
		return t;
	};
	_proto.dealer_i = function () {
		var t = new eui.Image();
		this.dealer = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 50;
		t.x = 64;
		t.y = 10;
		return t;
	};
	_proto.img_status_i = function () {
		var t = new eui.Image();
		this.img_status = t;
		t.horizontalCenter = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "text_bet_png";
		t.top = 140;
		t.x = 74;
		t.y = 20;
		return t;
	};
	_proto.betChoumaView_i = function () {
		var t = new sxbjl.SXBJLBetChoumaView();
		this.betChoumaView = t;
		t.bottom = 205;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "SXBJLBetChoumaSkin";
		t.x = 340;
		t.y = 725;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_bottom_bg_png";
		t.x = 0;
		t.y = 838;
		return t;
	};
	_proto.userInfo_i = function () {
		var t = new eui.Group();
		this.userInfo = t;
		t.bottom = 10;
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 30;
		t.y = 858;
		t.elementsContent = [this._Image3_i(),this.img_header_i(),this.userName_i(),this._Group1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "user_info_board_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_header_i = function () {
		var t = new eui.Image();
		this.img_header = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 77;
		t.left = 30;
		t.source = "common0_png";
		t.verticalCenter = 17;
		t.y = 10;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 68;
		t.text = "GUEST7414";
		t.verticalCenter = -16;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 82;
		t.verticalCenter = 45;
		t.width = 200;
		t.elementsContent = [this._Image4_i(),this.txt_gold_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_money_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_gold_i = function () {
		var t = new eui.Label();
		this.txt_gold = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "999,999";
		t.verticalCenter = 0;
		return t;
	};
	_proto.progressTimerGroup_i = function () {
		var t = new eui.Group();
		this.progressTimerGroup = t;
		t.horizontalCenter = 257;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 100;
		t.elementsContent = [this._Image5_i(),this.progressTimeTxt_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "timer_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.progressTimeTxt_i = function () {
		var t = new eui.Label();
		this.progressTimeTxt = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "20";
		t.textColor = 0x25008c;
		t.verticalCenter = 12;
		return t;
	};
	_proto.betAreaView_i = function () {
		var t = new sxbjl.BJLBetAreaView();
		this.betAreaView = t;
		t.horizontalCenter = -4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BJLBetAreaSkin";
		t.top = 184;
		t.x = 226;
		t.y = 184.00000000000003;
		return t;
	};
	_proto.btn_player_i = function () {
		var t = new uiCore.Button();
		this.btn_player = t;
		t.bottom = 240;
		t.label = "";
		t.left = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 35;
		t.y = 750;
		t.skinName = BJLGameSceneSkin$Skin5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.percentWidth = 100;
		t.elementsContent = [this.choumaGroup1_i(),this.choumaGroup2_i(),this.choumaGroup3_i(),this.choumaGroup4_i(),this.choumaGroup5_i()];
		return t;
	};
	_proto.choumaGroup1_i = function () {
		var t = new eui.Group();
		this.choumaGroup1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = -515.5;
		t.top = 265;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 350;
		return t;
	};
	_proto.choumaGroup2_i = function () {
		var t = new eui.Group();
		this.choumaGroup2 = t;
		t.height = 150;
		t.horizontalCenter = 507;
		t.top = 265;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 350;
		return t;
	};
	_proto.choumaGroup3_i = function () {
		var t = new eui.Group();
		this.choumaGroup3 = t;
		t.height = 100;
		t.horizontalCenter = -3;
		t.top = 570;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 480;
		return t;
	};
	_proto.choumaGroup4_i = function () {
		var t = new eui.Group();
		this.choumaGroup4 = t;
		t.height = 100;
		t.horizontalCenter = -515;
		t.top = 570;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 350;
		return t;
	};
	_proto.choumaGroup5_i = function () {
		var t = new eui.Group();
		this.choumaGroup5 = t;
		t.height = 100;
		t.horizontalCenter = 507;
		t.top = 570;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 350;
		return t;
	};
	_proto.gameRoadView_i = function () {
		var t = new sxbjl.SXBJLGameRoadInfoView();
		this.gameRoadView = t;
		t.bottom = 10;
		t.horizontalCenter = 170;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "SXBJLGameRoadInfoSkin";
		t.x = 512;
		t.y = 864;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 88;
		t.horizontalCenter = 873;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1786;
		t.y = 864;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sxbjl_game_roadlist_wenlu_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_dayanlu1_png";
		t.x = 10;
		t.y = 40;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_xiaolu1_png";
		t.x = 35;
		t.y = 40;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_xiaoqianglu1_png";
		t.x = 60;
		t.y = 40;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_dayanlu2_png";
		t.x = 10;
		t.y = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_xiaolu2_png";
		t.x = 35;
		t.y = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_xiaoqianglu2_png";
		t.x = 60;
		t.y = 100;
		return t;
	};
	_proto.gameCardResultView_i = function () {
		var t = new sxbjl.SXBJLGameCardResultView();
		this.gameCardResultView = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "SXBJLGameCardResultSkin";
		t.top = 181;
		t.x = 700;
		t.y = 181;
		return t;
	};
	_proto.backMenuGroup_i = function () {
		var t = new eui.Group();
		this.backMenuGroup = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 116;
		t.visible = false;
		t.x = 0;
		t.y = 116;
		t.elementsContent = [this._Image13_i(),this._Group4_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sxbjl_game_caidan_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 331;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 200;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.backButton_i(),this.settingBtn_i(),this.helpButton_i(),this.gameRecord_i(),this.gameSuggest_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Group();
		this.backButton = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 10;
		t.elementsContent = [this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "game_txt_back_png";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_caidan_btn_tuichu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.settingBtn_i = function () {
		var t = new eui.Group();
		this.settingBtn = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 10;
		t.elementsContent = [this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "game_txt_setting_png";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_caidan_btn_shezhi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Group();
		this.helpButton = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 10;
		t.elementsContent = [this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "game_txt_help_png";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_caidan_btn_bangzhu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameRecord_i = function () {
		var t = new eui.Group();
		this.gameRecord = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 10;
		t.elementsContent = [this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "game_txt_record_png";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_caidan_btn_jilv_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameSuggest_i = function () {
		var t = new eui.Group();
		this.gameSuggest = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 10;
		t.elementsContent = [this._Image22_i(),this._Image23_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "game_txt_suggest_png";
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_caidan_btn_fankui_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.startBetGroup_i = function () {
		var t = new eui.Group();
		this.startBetGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.visible = false;
		t.elementsContent = [this.img_startBetting_i()];
		return t;
	};
	_proto.img_startBetting_i = function () {
		var t = new eui.Image();
		this.img_startBetting = t;
		t.anchorOffsetX = 459;
		t.source = "bjl_game_startBetting_png";
		t.touchEnabled = false;
		t.verticalCenter = -100;
		t.x = 960;
		return t;
	};
	_proto.btn_allRoad_i = function () {
		var t = new uiCore.Button();
		this.btn_allRoad = t;
		t.bottom = 10;
		t.horizontalCenter = 875;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1790.0000000000002;
		t.y = 994.0000000000001;
		t.skinName = BJLGameSceneSkin$Skin6;
		return t;
	};
	_proto.btn_menu_i = function () {
		var t = new uiCore.Button();
		this.btn_menu = t;
		t.label = "";
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 30;
		t.x = 30;
		t.y = 30;
		t.skinName = BJLGameSceneSkin$Skin7;
		return t;
	};
	_proto.gameChangeTableView_i = function () {
		var t = new sxbjl.BJLGameChangeTableView();
		this.gameChangeTableView = t;
		t.bottom = 0;
		t.right = 0;
		t.skinName = "BJLGameChangeTableSkin";
		t.top = 0;
		t.visible = true;
		return t;
	};
	return BJLGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/item/BJLPlayerListItemSkin.exml'] = window.BJLPlayerListItemSkin = (function (_super) {
	__extends(BJLPlayerListItemSkin, _super);
	function BJLPlayerListItemSkin() {
		_super.call(this);
		this.skinParts = ["img_ranking","userName","txt_gold","txt_betTimes"];
		
		this.height = 125;
		this.width = 1180;
		this.elementsContent = [this.img_ranking_i(),this.userName_i(),this._Image1_i(),this.txt_gold_i(),this._Image2_i(),this.txt_betTimes_i()];
	}
	var _proto = BJLPlayerListItemSkin.prototype;

	_proto.img_ranking_i = function () {
		var t = new eui.Image();
		this.img_ranking = t;
		t.left = 40;
		t.source = "no1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "ID: 123456789";
		t.textColor = 0xff9a1c;
		t.verticalCenter = 0;
		t.x = 205;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 24;
		t.source = "money_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_gold_i = function () {
		var t = new eui.Label();
		this.txt_gold = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 671;
		t.size = 40;
		t.text = "99,999.99";
		t.textColor = 0xfcab49;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 394;
		t.source = "bet_img_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.txt_betTimes_i = function () {
		var t = new eui.Label();
		this.txt_betTimes = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 50;
		t.size = 40;
		t.text = "777";
		t.textColor = 0xffb55b;
		t.verticalCenter = 0;
		return t;
	};
	return BJLPlayerListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/item/SXBJLGameRoadTabBtnSkin.exml'] = window.SXBJLGameRoadTabBtnSkin = (function (_super) {
	__extends(SXBJLGameRoadTabBtnSkin, _super);
	function SXBJLGameRoadTabBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.iconUp"],[0],this._Image1,"source")
				])
			,
			new eui.State ("down",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.iconDown"],[0],this._Image1,"source")
				])
		];
	}
	var _proto = SXBJLGameRoadTabBtnSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.includeInLayout = true;
		t.source = "sxbjl_game_roadlist_btn_zhankai_dalu01_png";
		return t;
	};
	return SXBJLGameRoadTabBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/item/SXBJLGameToggleSwitchSkin.exml'] = window.SXBJLGameToggleSwitchSkin = (function (_super) {
	__extends(SXBJLGameToggleSwitchSkin, _super);
	function SXBJLGameToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 26;
		this.width = 46;
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","sxbjl_game_bets_btn_kaiguan2_png"),
					new eui.SetProperty("_Image2","x",0)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("_Image1","source","sxbjl_game_bets_btn_kaiguan2_png"),
					new eui.SetProperty("_Image2","x",0)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","sxbjl_game_bets_btn_kaiguan3_png"),
					new eui.SetProperty("_Image2","verticalCenter",0),
					new eui.SetProperty("_Image2","source","sxbjl_game_bets_btn_kaiguan_png"),
					new eui.SetProperty("_Image2","x",22)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","sxbjl_game_bets_btn_kaiguan3_png"),
					new eui.SetProperty("_Image2","x",22)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","sxbjl_game_bets_btn_kaiguan3_png"),
					new eui.SetProperty("_Image2","source","sxbjl_game_bets_btn_kaiguan_png"),
					new eui.SetProperty("_Image2","x",22)
				])
		];
	}
	var _proto = SXBJLGameToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_bets_btn_kaiguan2_png";
		t.verticalCenter = 0;
		t.x = -10;
		t.y = -10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_bets_btn_kaiguan_png";
		t.verticalCenter = 0;
		t.y = 0;
		return t;
	};
	return SXBJLGameToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/BJLGameTableItemSkin.exml'] = window.BJLGameTableItemSkin = (function (_super) {
	__extends(BJLGameTableItemSkin, _super);
	function BJLGameTableItemSkin() {
		_super.call(this);
		this.skinParts = ["nameLabel","betlimitLabel","stateLabel","countDownLabel","roadGroup"];
		
		this.width = 450;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = BJLGameTableItemSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 186;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this.roadGroup_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 27;
		t.horizontalCenter = 0;
		t.visible = true;
		t.width = 421;
		t.y = 3;
		t.elementsContent = [this.nameLabel_i(),this._Label1_i(),this.betlimitLabel_i(),this._Group1_i()];
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.fontFamily = "SimHei";
		t.left = 12;
		t.size = 20;
		t.text = "体验房";
		t.textColor = 0xE2E2E2;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.left = 93;
		t.size = 20;
		t.text = "T001";
		t.textColor = 0xE2E2E2;
		t.verticalCenter = 0;
		t.x = 15;
		t.y = 14;
		return t;
	};
	_proto.betlimitLabel_i = function () {
		var t = new eui.Label();
		this.betlimitLabel = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 20;
		t.size = 20;
		t.text = "4-250";
		t.textColor = 0xE2E2E2;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.right = -47;
		t.y = 3;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.stateLabel_i(),this.countDownLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		return t;
	};
	_proto.stateLabel_i = function () {
		var t = new eui.Label();
		this.stateLabel = t;
		t.fontFamily = "SimHei";
		t.size = 20;
		t.text = "下注中";
		t.textColor = 0xE2E2E2;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.countDownLabel_i = function () {
		var t = new eui.Label();
		this.countDownLabel = t;
		t.fontFamily = "SimHei";
		t.includeInLayout = true;
		t.size = 20;
		t.text = "16";
		t.textColor = 0xE2E2E2;
		t.x = 33;
		t.y = 0;
		return t;
	};
	_proto.roadGroup_i = function () {
		var t = new eui.Group();
		this.roadGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 450;
		t.x = 0;
		t.y = 32;
		return t;
	};
	return BJLGameTableItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/BJLPlayerListSkin.exml'] = window.BJLPlayerListSkin = (function (_super) {
	__extends(BJLPlayerListSkin, _super);
	var BJLPlayerListSkin$Skin8 = 	(function (_super) {
		__extends(BJLPlayerListSkin$Skin8, _super);
		function BJLPlayerListSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_cancel_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLPlayerListSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_cancel_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLPlayerListSkin$Skin8;
	})(eui.Skin);

	function BJLPlayerListSkin() {
		_super.call(this);
		this.skinParts = ["player_list","closeButton"];
		
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.closeButton_i(),this._Label1_i()];
	}
	var _proto = BJLPlayerListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "player_list_board_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 565;
		t.horizontalCenter = 0;
		t.verticalCenter = 8;
		t.width = 1180;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.player_list_i()];
		return t;
	};
	_proto.player_list_i = function () {
		var t = new eui.List();
		this.player_list = t;
		t.itemRenderer = BJLPlayerListItemView;
		t.itemRendererSkinName = BJLPlayerListItemSkin;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new uiCore.Button();
		this.closeButton = t;
		t.label = "";
		t.right = 50;
		t.top = 40;
		t.skinName = BJLPlayerListSkin$Skin8;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 45;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "展示金额最多的前20名玩家";
		t.textColor = 0xffd596;
		return t;
	};
	return BJLPlayerListSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/gamescene/panel/SXBJLGameAllRoadInfoSkin.exml'] = window.SXBJLGameAllRoadInfoSkin = (function (_super) {
	__extends(SXBJLGameAllRoadInfoSkin, _super);
	var SXBJLGameAllRoadInfoSkin$Skin9 = 	(function (_super) {
		__extends(SXBJLGameAllRoadInfoSkin$Skin9, _super);
		function SXBJLGameAllRoadInfoSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SXBJLGameAllRoadInfoSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_cancel_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SXBJLGameAllRoadInfoSkin$Skin9;
	})(eui.Skin);

	function SXBJLGameAllRoadInfoSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeButton","g_road1","img_newroad1","g_road2","img_newroad2","g_road3","img_newroad3","g_road4","img_newroad4","g_road5","img_newroad5","g_info","txt_zhuang","txt_xian","txt_he","txt_zhuangdui","txt_xiandui","txt_all"];
		
		this.elementsContent = [this.g_info_i(),this._Group14_i()];
	}
	var _proto = SXBJLGameAllRoadInfoSkin.prototype;

	_proto.g_info_i = function () {
		var t = new eui.Group();
		this.g_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 920;
		t.touchEnabled = false;
		t.width = 1733;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.closeButton_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_ludan_bg_png";
		t.x = -1.33;
		t.y = 0;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new uiCore.Button();
		this.closeButton = t;
		t.right = 50;
		t.top = 40;
		t.skinName = SXBJLGameAllRoadInfoSkin$Skin9;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 22;
		t.verticalCenter = -214.5;
		t.elementsContent = [this.g_road1_i(),this.img_newroad1_i()];
		return t;
	};
	_proto.g_road1_i = function () {
		var t = new eui.Group();
		this.g_road1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 255;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 2;
		t.width = 1580;
		return t;
	};
	_proto.img_newroad1_i = function () {
		var t = new eui.Image();
		this.img_newroad1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 263;
		t.y = 1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 101;
		t.y = 567;
		t.elementsContent = [this.g_road2_i(),this.img_newroad2_i()];
		return t;
	};
	_proto.g_road2_i = function () {
		var t = new eui.Group();
		this.g_road2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 302;
		t.width = 889;
		t.y = 3;
		return t;
	};
	_proto.img_newroad2_i = function () {
		var t = new eui.Image();
		this.img_newroad2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 263;
		t.y = 1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -525.5;
		t.verticalCenter = 10;
		t.elementsContent = [this.g_road3_i(),this.img_newroad3_i()];
		return t;
	};
	_proto.g_road3_i = function () {
		var t = new eui.Group();
		this.g_road3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.width = 488.67;
		t.x = 1;
		t.y = 4;
		return t;
	};
	_proto.img_newroad3_i = function () {
		var t = new eui.Image();
		this.img_newroad3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 263;
		t.y = 1;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 24;
		t.verticalCenter = 9;
		t.elementsContent = [this.g_road4_i(),this.img_newroad4_i()];
		return t;
	};
	_proto.g_road4_i = function () {
		var t = new eui.Group();
		this.g_road4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.width = 490;
		t.x = 1;
		t.y = 4;
		return t;
	};
	_proto.img_newroad4_i = function () {
		var t = new eui.Image();
		this.img_newroad4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 263;
		t.y = 1;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 577;
		t.verticalCenter = 9;
		t.elementsContent = [this.g_road5_i(),this.img_newroad5_i()];
		return t;
	};
	_proto.g_road5_i = function () {
		var t = new eui.Group();
		this.g_road5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 151.33;
		t.width = 490;
		t.x = 1;
		t.y = 4;
		return t;
	};
	_proto.img_newroad5_i = function () {
		var t = new eui.Image();
		this.img_newroad5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_game_roadlist_zk_kaung_png";
		t.visible = false;
		t.x = 263;
		t.y = 1;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.right = 184;
		t.verticalCenter = 134;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_dalu1_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "red_l_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "slash_red_m_png";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.right = 184;
		t.verticalCenter = 191;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sxbjl_game_ludan_img_dalu2_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "blue_l_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "slash_blue_m_png";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 262.5;
		t.verticalCenter = 262;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 21;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.width = 80;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.txt_zhuang_i()];
		return t;
	};
	_proto.txt_zhuang_i = function () {
		var t = new eui.Label();
		this.txt_zhuang = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0xff7f8c;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.width = 80;
		t.x = 0;
		t.y = 20;
		t.elementsContent = [this.txt_xian_i()];
		return t;
	};
	_proto.txt_xian_i = function () {
		var t = new eui.Label();
		this.txt_xian = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0x6d8aff;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.width = 80;
		t.x = 0;
		t.y = 40;
		t.elementsContent = [this.txt_he_i()];
		return t;
	};
	_proto.txt_he_i = function () {
		var t = new eui.Label();
		this.txt_he = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0x018780;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.width = 80;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.txt_zhuangdui_i()];
		return t;
	};
	_proto.txt_zhuangdui_i = function () {
		var t = new eui.Label();
		this.txt_zhuangdui = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0xff7f8c;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.width = 80;
		t.x = 10;
		t.y = 30;
		t.elementsContent = [this.txt_xiandui_i()];
		return t;
	};
	_proto.txt_xiandui_i = function () {
		var t = new eui.Label();
		this.txt_xiandui = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0x6d8aff;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.width = 80;
		t.x = 0;
		t.y = 60;
		t.elementsContent = [this.txt_all_i()];
		return t;
	};
	_proto.txt_all_i = function () {
		var t = new eui.Label();
		this.txt_all = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "34";
		t.textColor = 0xe5b7df;
		t.y = 0;
		return t;
	};
	return SXBJLGameAllRoadInfoSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/roomhallscene/BJLRoomHallSkin.exml'] = window.BJLRoomHallSkin = (function (_super) {
	__extends(BJLRoomHallSkin, _super);
	var BJLRoomHallSkin$Skin10 = 	(function (_super) {
		__extends(BJLRoomHallSkin$Skin10, _super);
		function BJLRoomHallSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLRoomHallSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bjl_hall_btn_bangzhu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLRoomHallSkin$Skin10;
	})(eui.Skin);

	var BJLRoomHallSkin$Skin11 = 	(function (_super) {
		__extends(BJLRoomHallSkin$Skin11, _super);
		function BJLRoomHallSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLRoomHallSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bjl_hall_btn_jilv_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLRoomHallSkin$Skin11;
	})(eui.Skin);

	var BJLRoomHallSkin$Skin12 = 	(function (_super) {
		__extends(BJLRoomHallSkin$Skin12, _super);
		function BJLRoomHallSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLRoomHallSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bjl_hall_btn_fanhui_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLRoomHallSkin$Skin12;
	})(eui.Skin);

	function BJLRoomHallSkin() {
		_super.call(this);
		this.skinParts = ["roomLevelTabBar","roomList","roomListScroller","roomListRender2","roomListScroller2","roomListRender1","roomListScroller1","roomListRender0","roomListScroller0","roomViewStack","roomListGroup","header","img_headerMask","headGroup","userName","userInfo","goldLabel","helpButton","recordButton","backButton","noticeLabel","noticeScroller","noticeItemGroup"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.roomListGroup_i(),this._Group10_i(),this._Group11_i(),this.noticeItemGroup_i(),this._Image9_i()];
	}
	var _proto = BJLRoomHallSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bjl_hall_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bjl_hall_header_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 48;
		t.source = "bjl_hall_logo_png";
		t.top = 4;
		t.visible = true;
		return t;
	};
	_proto.roomListGroup_i = function () {
		var t = new eui.Group();
		this.roomListGroup = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 302;
		t.verticalCenter = 87;
		t.visible = true;
		t.elementsContent = [this._Image4_i(),this.roomLevelTabBar_i(),this.roomViewStack_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bjl_hall_list_bg_png";
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto.roomLevelTabBar_i = function () {
		var t = new eui.TabBar();
		this.roomLevelTabBar = t;
		t.itemRendererSkinName = BJLRoomLevelSkin;
		t.left = 12;
		t.right = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 23;
		t.visible = true;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.Level = "1";
		t.iconDown = "bjl_hall_btn_room1_selected_png";
		t.iconUp = "bjl_hall_btn_room1_png";
		t.name = "體驗房";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.Level = "2";
		t.iconDown = "bjl_hall_btn_room2_selected_png";
		t.iconUp = "bjl_hall_btn_room2_png";
		t.name = "新手房";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.Level = "3";
		t.iconDown = "bjl_hall_btn_room3_selected_png";
		t.iconUp = "bjl_hall_btn_room3_png";
		t.name = "中級房";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.Level = "4";
		t.iconDown = "bjl_hall_btn_room4_selected_png";
		t.iconUp = "bjl_hall_btn_room4_png";
		t.name = "高級房";
		return t;
	};
	_proto.roomViewStack_i = function () {
		var t = new eui.ViewStack();
		this.roomViewStack = t;
		t.height = 760;
		t.horizontalCenter = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectedIndex = 3;
		t.width = 1025;
		t.y = 116;
		t.elementsContent = [this._Group2_i(),this._Group4_i(),this._Group6_i(),this._Group8_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.roomListScroller_i()];
		return t;
	};
	_proto.roomListScroller_i = function () {
		var t = new eui.Scroller();
		this.roomListScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 760;
		t.horizontalCenter = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.visible = true;
		t.width = 1025;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.roomList_i()];
		return t;
	};
	_proto.roomList_i = function () {
		var t = new eui.List();
		this.roomList = t;
		t.horizontalCenter = 0;
		t.itemRenderer = BJLRoomItemRender;
		t.itemRendererSkinName = BJLRoomListRenderItemSkin;
		t.selectedIndex = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingBottom = 10;
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i()];
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.name = "null";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.name = "null";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.name = "null";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.name = "null";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.roomListScroller2_i()];
		return t;
	};
	_proto.roomListScroller2_i = function () {
		var t = new eui.Scroller();
		this.roomListScroller2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 760;
		t.horizontalCenter = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.visible = true;
		t.width = 1025;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.roomListRender2_i()];
		return t;
	};
	_proto.roomListRender2_i = function () {
		var t = new eui.List();
		this.roomListRender2 = t;
		t.horizontalCenter = 0;
		t.itemRenderer = BJLRoomItemRender;
		t.itemRendererSkinName = BJLRoomListRenderItemSkin;
		t.selectedIndex = 0;
		t.layout = this._VerticalLayout2_i();
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingBottom = 10;
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object9_i(),this._Object10_i(),this._Object11_i()];
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.name = "";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.name = "";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.name = "";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.roomListScroller1_i()];
		return t;
	};
	_proto.roomListScroller1_i = function () {
		var t = new eui.Scroller();
		this.roomListScroller1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 760;
		t.horizontalCenter = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.visible = true;
		t.width = 1025;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.roomListRender1_i()];
		return t;
	};
	_proto.roomListRender1_i = function () {
		var t = new eui.List();
		this.roomListRender1 = t;
		t.horizontalCenter = 0;
		t.itemRenderer = BJLRoomItemRender;
		t.itemRendererSkinName = BJLRoomListRenderItemSkin;
		t.selectedIndex = 0;
		t.layout = this._VerticalLayout3_i();
		t.dataProvider = this._ArrayCollection4_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingBottom = 10;
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection4_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object12_i(),this._Object13_i()];
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.name = "";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.name = "";
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.roomListScroller0_i()];
		return t;
	};
	_proto.roomListScroller0_i = function () {
		var t = new eui.Scroller();
		this.roomListScroller0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 760;
		t.horizontalCenter = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.visible = true;
		t.width = 1025;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group7_i();
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.roomListRender0_i()];
		return t;
	};
	_proto.roomListRender0_i = function () {
		var t = new eui.List();
		this.roomListRender0 = t;
		t.horizontalCenter = 0;
		t.itemRenderer = BJLRoomItemRender;
		t.itemRendererSkinName = BJLRoomListRenderItemSkin;
		t.selectedIndex = 0;
		t.layout = this._VerticalLayout4_i();
		t.dataProvider = this._ArrayCollection5_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingBottom = 10;
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection5_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object14_i()];
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.name = "";
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 125;
		t.left = 105;
		t.top = 11;
		t.visible = true;
		t.elementsContent = [this.userInfo_i(),this._Group9_i()];
		return t;
	};
	_proto.userInfo_i = function () {
		var t = new eui.Group();
		this.userInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.width = 298;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headGroup_i(),this.userName_i(),this._Image6_i()];
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 6;
		t.elementsContent = [this._Image5_i(),this.header_i(),this.img_headerMask_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sxbjl_hall_touxiang_tubiao_bg_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.header_i = function () {
		var t = new eui.Image();
		this.header = t;
		t.height = 53;
		t.horizontalCenter = 0;
		t.source = "";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 53;
		return t;
	};
	_proto.img_headerMask_i = function () {
		var t = new eui.Image();
		this.img_headerMask = t;
		t.horizontalCenter = 0;
		t.source = "sxbjl_hall_touxiang_tubiao_bg3_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "GUEST1322";
		t.textColor = 0xFFFFFF;
		t.top = 24;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "common0_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 16;
		t.right = 0;
		t.visible = true;
		t.width = 183;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image7_i(),this.goldLabel_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bjl_hall_touxiang_tubiao_png";
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 0;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.Label();
		this.goldLabel = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.right = 0;
		t.size = 32;
		t.text = "19,300";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.right = 69;
		t.top = 13;
		t.visible = true;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.helpButton_i(),this.recordButton_i(),this.backButton_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 65;
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new uiCore.Button();
		this.helpButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = -1737.9999999999998;
		t.y = -5;
		t.skinName = BJLRoomHallSkin$Skin10;
		return t;
	};
	_proto.recordButton_i = function () {
		var t = new uiCore.Button();
		this.recordButton = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -1758.0000000000002;
		t.y = 25;
		t.skinName = BJLRoomHallSkin$Skin11;
		return t;
	};
	_proto.backButton_i = function () {
		var t = new uiCore.Button();
		this.backButton = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -899;
		t.y = 0;
		t.skinName = BJLRoomHallSkin$Skin12;
		return t;
	};
	_proto.noticeItemGroup_i = function () {
		var t = new eui.Group();
		this.noticeItemGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 300;
		t.top = 110;
		t.visible = true;
		t.width = 1215;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this._Image8_i(),this.noticeScroller_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bjl_hall_notice_bg_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.noticeScroller_i = function () {
		var t = new eui.Scroller();
		this.noticeScroller = t;
		t.height = 72;
		t.left = 68;
		t.right = 0;
		t.verticalCenter = 0;
		t.viewport = this._Group12_i();
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.noticeLabel_i()];
		return t;
	};
	_proto.noticeLabel_i = function () {
		var t = new eui.Label();
		this.noticeLabel = t;
		t.bold = true;
		t.bottom = 0;
		t.text = "财神降临, 玩家****Fred在百家乐高级房赢了3,000, 真是游戏1分钟, 少打10年工";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		t.x = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 140;
		t.source = "bjl_hall_bg_renwu_png";
		t.visible = true;
		return t;
	};
	return BJLRoomHallSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/roomhallscene/BJLRoomLevelSkin.exml'] = window.BJLRoomLevelSkin = (function (_super) {
	__extends(BJLRoomLevelSkin, _super);
	function BJLRoomLevelSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.iconUp"],[0],this._Image1,"source")
				])
			,
			new eui.State ("down",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.iconDown"],[0],this._Image1,"source")
				])
		];
	}
	var _proto = BJLRoomLevelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "bjl_hall_btn_room1_png";
		return t;
	};
	return BJLRoomLevelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/roomhallscene/item/BJLRoomItemSelectSkin.exml'] = window.BJLRoomItemSelectSkin = (function (_super) {
	__extends(BJLRoomItemSelectSkin, _super);
	var BJLRoomItemSelectSkin$Skin13 = 	(function (_super) {
		__extends(BJLRoomItemSelectSkin$Skin13, _super);
		function BJLRoomItemSelectSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLRoomItemSelectSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bjl_hall_list_btn_entergame_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLRoomItemSelectSkin$Skin13;
	})(eui.Skin);

	function BJLRoomItemSelectSkin() {
		_super.call(this);
		this.skinParts = ["ludanGroup","statusLabel","countDownLabel","betLimitLabel","enterGame"];
		
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = BJLRoomItemSelectSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.touchChildren = true;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group1_i(),this._Group4_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 463;
		t.y = 65;
		t.elementsContent = [this._Image1_i(),this.ludanGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.includeInLayout = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bjl_hall_list_item_bg_png";
		t.visible = true;
		t.y = 0;
		return t;
	};
	_proto.ludanGroup_i = function () {
		var t = new eui.Group();
		this.ludanGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 200;
		t.x = 816;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this.enterGame_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 30;
		t.visible = true;
		t.width = 100;
		t.elementsContent = [this.statusLabel_i(),this.countDownLabel_i()];
		return t;
	};
	_proto.statusLabel_i = function () {
		var t = new eui.Label();
		this.statusLabel = t;
		t.fontFamily = "SimHei";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "派獎中";
		t.textColor = 0xFB8A0B;
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.countDownLabel_i = function () {
		var t = new eui.Label();
		this.countDownLabel = t;
		t.right = 0;
		t.size = 24;
		t.text = "15";
		t.textColor = 0xFB8A0B;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -10;
		t.visible = true;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this.betLimitLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "限額:";
		t.textColor = 0xF3C63B;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.betLimitLabel_i = function () {
		var t = new eui.Label();
		this.betLimitLabel = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "4-250";
		t.textColor = 0xF3C63B;
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.enterGame_i = function () {
		var t = new uiCore.Button();
		this.enterGame = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = BJLRoomItemSelectSkin$Skin13;
		return t;
	};
	return BJLRoomItemSelectSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/roomhallscene/item/BJLRoomListRenderItemSkin.exml'] = window.BJLRoomListRenderItemSkin = (function (_super) {
	__extends(BJLRoomListRenderItemSkin, _super);
	function BJLRoomListRenderItemSkin() {
		_super.call(this);
		this.skinParts = ["selectView"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BJLRoomListRenderItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.selectView_i()];
		return t;
	};
	_proto.selectView_i = function () {
		var t = new sxbjl.BJLRoomItemSelectView();
		this.selectView = t;
		t.horizontalCenter = 0;
		t.skinName = "BJLRoomItemSelectSkin";
		t.y = 0;
		return t;
	};
	return BJLRoomListRenderItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/roomhallscene/item/BJLRoomTabBtnSkin.exml'] = window.BJLRoomTabBtnSkin = (function (_super) {
	__extends(BJLRoomTabBtnSkin, _super);
	function BJLRoomTabBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.iconUp"],[0],this._Image1,"source")
				])
			,
			new eui.State ("down",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.iconDown"],[0],this._Image1,"source")
				])
		];
	}
	var _proto = BJLRoomTabBtnSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 33;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 81;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.includeInLayout = true;
		t.source = "sxbjl_hall_list_btn_dalu01_png";
		return t;
	};
	return BJLRoomTabBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/feedback/BJLSuggestionSkin.exml'] = window.BJLSuggestionSkin = (function (_super) {
	__extends(BJLSuggestionSkin, _super);
	var BJLSuggestionSkin$Skin14 = 	(function (_super) {
		__extends(BJLSuggestionSkin$Skin14, _super);
		function BJLSuggestionSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLSuggestionSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sxbjl_windows_tips_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLSuggestionSkin$Skin14;
	})(eui.Skin);

	var BJLSuggestionSkin$Skin15 = 	(function (_super) {
		__extends(BJLSuggestionSkin$Skin15, _super);
		function BJLSuggestionSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sxbjl_windows_tips_confirm_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BJLSuggestionSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sxbjl_windows_tips_confirm_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLSuggestionSkin$Skin15;
	})(eui.Skin);

	function BJLSuggestionSkin() {
		_super.call(this);
		this.skinParts = ["messageLabel","okButton","submitSugButton"];
		
		this.elementsContent = [this._Image1_i(),this.messageLabel_i(),this.okButton_i(),this.submitSugButton_i()];
	}
	var _proto = BJLSuggestionSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sxbjl_window_feedback_bg2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.EditableText();
		this.messageLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0xffffff;
		t.fontFamily = "SimHei";
		t.height = 320;
		t.horizontalCenter = "0";
		t.lineSpacing = 10;
		t.multiline = true;
		t.prompt = "您的意见是我们最好的指南针，随时欢迎反馈哦！";
		t.promptColor = 0xfdaa34;
		t.size = 30;
		t.text = "";
		t.textColor = 0xfdaa34;
		t.verticalCenter = "0";
		t.width = 850;
		t.wordWrap = true;
		return t;
	};
	_proto.okButton_i = function () {
		var t = new uiCore.Button();
		this.okButton = t;
		t.isScale = true;
		t.label = "";
		t.right = 25;
		t.top = 45;
		t.skinName = BJLSuggestionSkin$Skin14;
		return t;
	};
	_proto.submitSugButton_i = function () {
		var t = new uiCore.Button();
		this.submitSugButton = t;
		t.bottom = 15;
		t.height = 70;
		t.horizontalCenter = 1.5;
		t.isScale = true;
		t.label = "";
		t.width = 175;
		t.skinName = BJLSuggestionSkin$Skin15;
		return t;
	};
	return BJLSuggestionSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/help/BJLHelpSkin.exml'] = window.BJLHelpSkin = (function (_super) {
	__extends(BJLHelpSkin, _super);
	var BJLHelpSkin$Skin16 = 	(function (_super) {
		__extends(BJLHelpSkin$Skin16, _super);
		function BJLHelpSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sxbjl_windows_tips_close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","sxbjl_windows_tips_close_png")
					])
			];
		}
		var _proto = BJLHelpSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sxbjl_windows_tips_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLHelpSkin$Skin16;
	})(eui.Skin);

	function BJLHelpSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 552;
		this.width = 972;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = BJLHelpSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bjl_windows_help_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new uiCore.Button();
		this.closeBtn = t;
		t.label = "";
		t.right = 25;
		t.soundPath = "sxzjh_button_common_mp3";
		t.top = 44;
		t.skinName = BJLHelpSkin$Skin16;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.horizontalCenter = -20;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.verticalCenter = 50;
		t.visible = true;
		t.viewport = this._Group4_i();
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.visible = true;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = true;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "一、玩法";
		t.textColor = 0xFDFF4C;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 276;
		t.left = 0;
		t.lineSpacing = 16;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1.本游戏采用8副牌(不含大小鬼,每副牌52张)合计416张。 \n2.庄闲个先派两张牌,\"闲家\"先发,如第一轮为分出胜负再按\"牌例\"进行补牌。 \n3.每方最多再发1张牌(补牌),谁最接近9点即为胜方,而相同点数字即和局。";
		t.textColor = 0xE2E2E2;
		t.top = 30;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.visible = true;
		t.y = 147;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "二、咪牌规则";
		t.textColor = 0xFDFF4C;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -83;
		t.left = 0;
		t.lineSpacing = 16;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1.押注庄、闲下注点的玩家均可以参与咪牌,只押注和、闲对的玩家不可以咪牌。 \n2.同时押注庄闲下注点时,只能咪押注金额多的一方。如果庄闲压住金额相同,只能咪庄家牌。 \n3.咪牌期与补牌期均为闲家先咪牌,庄家后咪牌。 \n4所有玩家咪牌完成则进入下一阶段。超时未咪牌，系统自动翻牌。";
		t.textColor = 0xE2E2E2;
		t.top = 30;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = true;
		t.y = 326;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "三、补牌规则";
		t.textColor = 0xFDFF4C;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -83;
		t.left = 0;
		t.lineSpacing = 16;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "闲家:";
		t.textColor = 0xE2E2E2;
		t.top = 30;
		return t;
	};
	return BJLHelpSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/record/BJLRecordItemSkin.exml'] = window.BJLRecordItemSkin = (function (_super) {
	__extends(BJLRecordItemSkin, _super);
	function BJLRecordItemSkin() {
		_super.call(this);
		this.skinParts = ["numLabel","idLabel","roomNameLabel","scoreLabel","endTimeLabel","txt_hint"];
		
		this.elementsContent = [this.numLabel_i(),this.idLabel_i(),this.roomNameLabel_i(),this.scoreLabel_i(),this.endTimeLabel_i(),this.txt_hint_i()];
	}
	var _proto = BJLRecordItemSkin.prototype;

	_proto.numLabel_i = function () {
		var t = new eui.Label();
		this.numLabel = t;
		t.fontFamily = "Arial";
		t.size = 24;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xE2E2E2;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 48;
		t.x = 20;
		return t;
	};
	_proto.idLabel_i = function () {
		var t = new eui.Label();
		this.idLabel = t;
		t.anchorOffsetX = 0;
		t.bold = false;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "50-1554109419-521166383-4";
		t.textAlign = "center";
		t.textColor = 0xE2E2E2;
		t.verticalCenter = 0;
		t.x = 86.5;
		return t;
	};
	_proto.roomNameLabel_i = function () {
		var t = new eui.Label();
		this.roomNameLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "体验房";
		t.textAlign = "center";
		t.textColor = 0x45C228;
		t.verticalCenter = 0;
		t.wordWrap = true;
		t.x = 447;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "+200";
		t.textAlign = "center";
		t.textColor = 0xFE5757;
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 553;
		return t;
	};
	_proto.endTimeLabel_i = function () {
		var t = new eui.Label();
		this.endTimeLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "2020-10-16 17:04:07";
		t.textAlign = "center";
		t.textColor = 0xE2E2E2;
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 665;
		return t;
	};
	_proto.txt_hint_i = function () {
		var t = new eui.Label();
		this.txt_hint = t;
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.includeInLayout = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "牌局编号复制成功";
		t.textAlign = "center";
		t.textColor = 0x88621e;
		t.visible = false;
		t.x = 187;
		t.y = 44;
		return t;
	};
	return BJLRecordItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/record/BJLRecordSkin.exml'] = window.BJLRecordSkin = (function (_super) {
	__extends(BJLRecordSkin, _super);
	var BJLRecordSkin$Skin17 = 	(function (_super) {
		__extends(BJLRecordSkin$Skin17, _super);
		function BJLRecordSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sxbjl_windows_tips_close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","sxbjl_windows_tips_close_png")
					])
			];
		}
		var _proto = BJLRecordSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sxbjl_windows_tips_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BJLRecordSkin$Skin17;
	})(eui.Skin);

	function BJLRecordSkin() {
		_super.call(this);
		this.skinParts = ["_closeButton","gameRecordList","recordScorller","noGameRecordLabel"];
		
		this.height = 552;
		this.width = 972;
		this.elementsContent = [this._Image1_i(),this._closeButton_i(),this._Group3_i(),this._Label1_i()];
	}
	var _proto = BJLRecordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bjl_windows_record_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._closeButton_i = function () {
		var t = new uiCore.Button();
		this._closeButton = t;
		t.label = "";
		t.right = 25;
		t.soundPath = "sxbrnnii_button_common_mp3";
		t.top = 44;
		t.visible = true;
		t.skinName = BJLRecordSkin$Skin17;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 451;
		t.horizontalCenter = 0;
		t.verticalCenter = 50.5;
		t.visible = true;
		t.width = 972;
		t.elementsContent = [this._Group1_i(),this.recordScorller_i(),this.noGameRecordLabel_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.x = 0;
		t.y = 15;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bjl_windows_record_text_1_png";
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 40;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bjl_windows_record_text_2_png";
		t.verticalCenter = 0;
		t.x = 219;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = -493;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bjl_windows_record_text_3_png";
		t.verticalCenter = 0;
		t.x = -9;
		t.y = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = -361;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bjl_windows_record_text_4_png";
		t.verticalCenter = 0;
		t.x = 231;
		t.y = 30;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = -361;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bjl_windows_record_text_5_png";
		t.verticalCenter = 0;
		t.x = 393;
		t.y = 40;
		return t;
	};
	_proto.recordScorller_i = function () {
		var t = new eui.Scroller();
		this.recordScorller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 285;
		t.horizontalCenter = 0;
		t.scrollPolicyV = "auto";
		t.width = 918;
		t.y = 61;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.gameRecordList_i()];
		return t;
	};
	_proto.gameRecordList_i = function () {
		var t = new eui.List();
		this.gameRecordList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.itemRenderer = BJLRecordItem;
		t.itemRendererSkinName = BJLRecordItemSkin;
		t.visible = true;
		t.x = 0;
		t.y = 19;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 25;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.th = "";
		return t;
	};
	_proto.noGameRecordLabel_i = function () {
		var t = new eui.Label();
		this.noGameRecordLabel = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "暂无记录";
		t.textColor = 0xE2E2E2;
		t.verticalCenter = -30;
		t.visible = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 45;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "展示最近10条游戏记录";
		t.textColor = 0x4A150F;
		t.visible = true;
		return t;
	};
	return BJLRecordSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/settingWindow/childrenSkins/SttingToggleSwitchSkin.exml'] = window.public.SttingToggleSwitchSkin = (function (_super) {
	__extends(SttingToggleSwitchSkin, _super);
	function SttingToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "down";
		this.elementsContent = [this._Image3_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"_Image3"),
					new eui.SetProperty("_Image1","source",""),
					new eui.SetProperty("_Image3","x",-10)
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image2","",2,"_Image3"),
					new eui.SetProperty("_Image1","source",""),
					new eui.SetProperty("_Image3","x",-10)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image2","horizontalCenter",0),
					new eui.SetProperty("_Image2","verticalCenter",0),
					new eui.SetProperty("_Image2","source",""),
					new eui.SetProperty("_Image3","right",-8)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image2","",2,"_Image3"),
					new eui.SetProperty("_Image1","source",""),
					new eui.SetProperty("_Image2","horizontalCenter",0),
					new eui.SetProperty("_Image2","verticalCenter",0),
					new eui.SetProperty("_Image3","x",-10)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image2","source","gamehall_btnOff_png"),
					new eui.SetProperty("_Image3","right",-8)
				])
		];
	}
	var _proto = SttingToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_windows_setting_sound_on_png";
		t.verticalCenter = 0;
		t.x = -10;
		t.y = -10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_windows_setting_sound_off_png";
		t.verticalCenter = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_windows_setting_btn_png";
		t.verticalCenter = 0;
		t.y = 10;
		return t;
	};
	return SttingToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/settingWindow/childrenSkins/VolumeHSliderMusicSkin.exml'] = window.VolumeHSliderMusicSkin = (function (_super) {
	__extends(VolumeHSliderMusicSkin, _super);
	function VolumeHSliderMusicSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = VolumeHSliderMusicSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.scale9Grid = new egret.Rectangle(6,3,7,6);
		t.source = "sxbjl_windows_setting_adjustment1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Group();
		this.trackHighlight = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -13;
		t.y = 15.3;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = -10;
		t.y = 10;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(16,0,455,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_windows_setting_adjustment2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.height = 44;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 1;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_windows_setting_btn_png";
		t.verticalCenter = 0;
		return t;
	};
	return VolumeHSliderMusicSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/settingWindow/childrenSkins/VolumeHSliderSoundSkin.exml'] = window.VolumeHSliderSoundSkin = (function (_super) {
	__extends(VolumeHSliderSoundSkin, _super);
	function VolumeHSliderSoundSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = VolumeHSliderSoundSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.scale9Grid = new egret.Rectangle(6,3,7,6);
		t.source = "sxbjl_windows_setting_adjustment1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Group();
		this.trackHighlight = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -17.67;
		t.y = 8;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = -10;
		t.y = 10;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(16,0,455,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_windows_setting_adjustment2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.height = 46;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sxbjl_windows_setting_btn_png";
		t.verticalCenter = 1;
		t.y = 0;
		return t;
	};
	return VolumeHSliderSoundSkin;
})(eui.Skin);generateEUI.paths['resource/skins/sxbjl/window/settingWindow/SettingWindowSkin.exml'] = window.SettingWindowSkin = (function (_super) {
	__extends(SettingWindowSkin, _super);
	var SettingWindowSkin$Skin18 = 	(function (_super) {
		__extends(SettingWindowSkin$Skin18, _super);
		function SettingWindowSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sxbjl_windows_tips_close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","sxbjl_windows_tips_close_png")
					])
			];
		}
		var _proto = SettingWindowSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sxbjl_windows_tips_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return SettingWindowSkin$Skin18;
	})(eui.Skin);

	function SettingWindowSkin() {
		_super.call(this);
		this.skinParts = ["_closeButton","textMusic","textSound","closeTextMusic","closeTextSound","sliderMusic","sliderSound","soundSwitch","musicSwitch","settingTitleText"];
		
		this.elementsContent = [this._Image1_i(),this._closeButton_i(),this._Group1_i(),this.settingTitleText_i()];
	}
	var _proto = SettingWindowSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "sxbjl_windows_setting_png";
		return t;
	};
	_proto._closeButton_i = function () {
		var t = new uiCore.Button();
		this._closeButton = t;
		t.isScale = true;
		t.label = "";
		t.right = 25;
		t.top = 44;
		t.skinName = SettingWindowSkin$Skin18;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -25.5;
		t.width = 801.42;
		t.elementsContent = [this.textMusic_i(),this.textSound_i(),this.closeTextMusic_i(),this.closeTextSound_i(),this._Image2_i(),this._Image3_i(),this.sliderMusic_i(),this.sliderSound_i(),this.soundSwitch_i(),this.musicSwitch_i()];
		return t;
	};
	_proto.textMusic_i = function () {
		var t = new eui.Image();
		this.textMusic = t;
		t.source = "sxbjl_windows_setting_music_png";
		t.x = 100;
		t.y = 50.01;
		return t;
	};
	_proto.textSound_i = function () {
		var t = new eui.Image();
		this.textSound = t;
		t.source = "sxbjl_windows_setting_sound_png";
		t.x = 100;
		t.y = 140.65;
		return t;
	};
	_proto.closeTextMusic_i = function () {
		var t = new eui.Image();
		this.closeTextMusic = t;
		t.source = "setting_text_music_png";
		t.x = 170;
		t.y = 245;
		return t;
	};
	_proto.closeTextSound_i = function () {
		var t = new eui.Image();
		this.closeTextSound = t;
		t.source = "setting_text_sound_png";
		t.x = 497;
		t.y = 245;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "setting_music_png";
		t.x = 30;
		t.y = 44;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "setting_volume_png";
		t.x = 30;
		t.y = 130;
		return t;
	};
	_proto.sliderMusic_i = function () {
		var t = new eui.HSlider();
		this.sliderMusic = t;
		t.anchorOffsetX = 0;
		t.height = 66;
		t.skinName = "VolumeHSliderMusicSkin";
		t.slideDuration = 0;
		t.snapInterval = 0;
		t.value = 10;
		t.width = 557;
		t.x = 200;
		t.y = 40;
		return t;
	};
	_proto.sliderSound_i = function () {
		var t = new eui.HSlider();
		this.sliderSound = t;
		t.skinName = "VolumeHSliderSoundSkin";
		t.snapInterval = 0;
		t.x = 200;
		t.y = 137.65;
		return t;
	};
	_proto.soundSwitch_i = function () {
		var t = new eui.ToggleSwitch();
		this.soundSwitch = t;
		t.right = 179.42;
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.skinName = "public.SttingToggleSwitchSkin";
		t.y = 295;
		return t;
	};
	_proto.musicSwitch_i = function () {
		var t = new eui.ToggleSwitch();
		this.musicSwitch = t;
		t.left = 174;
		t.selected = true;
		t.skinName = "public.SttingToggleSwitchSkin";
		t.y = 295;
		return t;
	};
	_proto.settingTitleText_i = function () {
		var t = new eui.Label();
		this.settingTitleText = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "设置";
		t.textColor = 0xedbf74;
		t.top = 88;
		t.visible = false;
		return t;
	};
	return SettingWindowSkin;
})(eui.Skin);
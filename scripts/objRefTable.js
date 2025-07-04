const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.UserMedia,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Touch,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.TiledBg.Acts.SetHeight,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Text.Acts.SubInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetAngle,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Audio.Exps.AnalyserPeakLevel,
		C3.Plugins.Audio.Exps.AnalyserRMSLevel,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.TiledBg.Cnds.CompareWidth,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.UserMedia.Acts.RequestMic,
		C3.Plugins.Browser.Acts.Focus,
		C3.Plugins.UserMedia.Cnds.OnApproved,
		C3.Plugins.Audio.Acts.AddAnalyserEffect,
		C3.Plugins.Audio.Acts.AddMuteEffect,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.UserMedia.Cnds.OnDeclined
	];
};
self.C3_JsPropNameTable = [
	{gameplay_BG: 0},
	{Tween: 0},
	{player_OBJ: 0},
	{gauge_TB: 0},
	{max: 0},
	{gauge_TB2: 0},
	{counter: 0},
	{count_TXT: 0},
	{timer_TXT: 0},
	{black_BG: 0},
	{gameOver_TXT: 0},
	{UserMedia: 0},
	{Audio: 0},
	{Browser: 0},
	{Touch: 0},
	{BtnOK: 0},
	{Low: 0},
	{Max: 0},
	{Mouth: 0},
	{GreenBar: 0},
	{VoiceMeter: 0},
	{gameStart: 0},
	{Desibel: 0},
	{gameOver: 0},
	{FrequencyBinCount: 0}
];

self.InstanceType = {
	gameplay_BG: class extends self.ISpriteInstance {},
	player_OBJ: class extends self.ISpriteInstance {},
	gauge_TB: class extends self.ITiledBackgroundInstance {},
	gauge_TB2: class extends self.ITiledBackgroundInstance {},
	count_TXT: class extends self.ITextInstance {},
	timer_TXT: class extends self.ITextInstance {},
	black_BG: class extends self.ISpriteInstance {},
	gameOver_TXT: class extends self.ITextInstance {},
	UserMedia: class extends self.IWorldInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	BtnOK: class extends self.IButtonInstance {},
	Mouth: class extends self.ISpriteInstance {},
	GreenBar: class extends self.ISpriteInstance {},
	VoiceMeter: class extends self.ITiledBackgroundInstance {}
}
'use strict';

function HelpDialog(trigger) {
	Dialog.call(this, 'help', trigger);
	this._element.id = 'helpDialog';
	
	// Ẩn luôn nút bấm mở Help trên giao diện (nếu có)
	if (trigger) {
		trigger.style.display = 'none';
	}
}
HelpDialog.prototype = Object.create(Dialog.prototype);
HelpDialog.prototype.constructor = HelpDialog;

HelpDialog.prototype.WIDTH = '656px';

// Chặn không cho hộp thoại mở lên khi được gọi
HelpDialog.prototype.open = function () {};

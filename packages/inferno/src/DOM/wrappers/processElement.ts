import VNodeFlags from 'inferno-vnode-flags';
import { isCheckedType, processInput } from './InputWrapper';
import { processSelect } from './SelectWrapper';
import { processTextarea } from './TextareaWrapper';
import { isNullOrUndef } from 'inferno-shared';
import { VNode } from '../../core/VNodes';

/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */

export function processElement(flags: number, vNode: VNode, dom: Node, nextPropsOrEmpty, mounting: boolean, isControlled: boolean): void {
	if (flags & VNodeFlags.InputElement) {
		processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
	}
	if (flags & VNodeFlags.SelectElement) {
		processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
	}
	if (flags & VNodeFlags.TextareaElement) {
		processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
	}
}

export function isControlledFormElement(nextPropsOrEmpty) {
	return (nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type)) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

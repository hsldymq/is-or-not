import {expect} from 'chai';
import is from '../src/index';

describe('测试isUndefined方法', () => {
    let v;
    it('未赋值变量应该为undefined', () => {
        expect(is.isUndefined(v)).to.be.ok;
    });

    it('未传参数应该被判定为undefined', () => {
        expect(is.isUndefined()).to.be.ok;
    });

    it('空对象不应该被判定为undefined', () => {
        expect(is.isUndefined({})).to.not.be.ok;
    });

    it('null不应该被判定为undefined', () => {
        expect(is.isUndefined(null)).to.not.be.ok;
    });

    it('false不应该被判定为undefined', () => {
        expect(is.isUndefined(false)).to.not.be.ok;
    });

    it('空字符串不应该被判定为undefined', () => {
        expect(is.isUndefined('')).to.not.be.ok;
    });
});

describe('测试isString方法', () => {
    it('测试字符串字面量', () => {
        expect(is.isString('a')).to.be.ok;
    });

    it('测试字符串对象', () => {
        expect(is.isString(new String('abc'))).to.be.ok;
    });

    it('对象不应该判定为字符串', () => {
        expect(is.isString({})).to.not.be.ok;
    });
});

describe('测试isBoolean方法', () => {
    it('测试布尔字面量', () => {
        expect(is.isBoolean(true)).to.be.ok;
    });

    it('测试布尔对象', () => {
        expect(is.isBoolean(new Boolean(false))).to.be.ok;
    });

    it('测试表达式', () => {
        expect(is.isBoolean(1 == 2)).to.be.ok;
    });

    it('对象不应该被判定为布尔类型', () => {
        expect(is.isBoolean({})).to.not.be.ok;
    });

    it('0不应该被判定为布尔类型', () => {
        expect(is.isBoolean(0)).to.not.be.ok;
    });

    it('空字符串不应该被判定为布尔类型', () => {
        expect(is.isBoolean('')).to.not.be.ok;
    });
});




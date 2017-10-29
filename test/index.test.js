import {expect} from 'chai';
import ion from '../src/index';

describe('测试isUndefined方法', () => {
    let v;
    it('未赋值变量应该为undefined', () => {
        expect(ion.isUndefined(v)).to.be.ok;
    });

    it('未传参数应该被判定为undefined', () => {
        expect(ion.isUndefined()).to.be.ok;
    });

    it('空对象不应该被判定为undefined', () => {
        expect(ion.isUndefined({})).to.not.be.ok;
    });

    it('null不应该被判定为undefined', () => {
        expect(ion.isUndefined(null)).to.not.be.ok;
    });

    it('false不应该被判定为undefined', () => {
        expect(ion.isUndefined(false)).to.not.be.ok;
    });

    it('空字符串不应该被判定为undefined', () => {
        expect(ion.isUndefined('')).to.not.be.ok;
    });
});

describe('测试isString方法', () => {
    it('测试字符串字面量', () => {
        expect(ion.isString('a')).to.be.ok;
    });

    it('测试字符串对象', () => {
        expect(ion.isString(new String('abc'))).to.be.ok;
    });

    it('对象不应该判定为字符串', () => {
        expect(ion.isString({})).to.not.be.ok;
    });
});

describe('测试isBoolean方法', () => {
    it('测试布尔字面量', () => {
        expect(ion.isBoolean(true)).to.be.ok;
    });

    it('测试布尔对象', () => {
        expect(ion.isBoolean(new Boolean(false))).to.be.ok;
    });

    it('测试表达式', () => {
        expect(ion.isBoolean(1 == 2)).to.be.ok;
    });

    it('对象不应该被判定为布尔类型', () => {
        expect(ion.isBoolean({})).to.not.be.ok;
    });

    it('0不应该被判定为布尔类型', () => {
        expect(ion.isBoolean(0)).to.not.be.ok;
    });

    it('空字符串不应该被判定为布尔类型', () => {
        expect(ion.isBoolean('')).to.not.be.ok;
    });
});

describe('测试isNumber方法', () => {
    it('测试number字面量(整数)', () => {
        expect(ion.isNumber(123)).to.be.ok;
    });

    it('测试number字面量(负数小数)', () => {
        expect(ion.isNumber(-123.11)).to.be.ok;
    });

    it('NaN应该为number类型', () => {
        expect(ion.isNumber(NaN)).to.be.ok;
    });

    it('正无穷大应该为number类型', () => {
        expect(ion.isNumber(Infinity)).to.be.ok;
    });

    it('负无穷大应该为number类型', () => {
        expect(ion.isNumber(-Infinity)).to.be.ok;
    });

    it('非严格判定模式下数字(整数)内容的字符串应该判定为true', () => {
        expect(ion.isNumber('-123')).to.be.ok;
    });

    it('非严格判定模式下数字(小数)内容的字符串应该判定为true', () => {
        expect(ion.isNumber('+.12')).to.be.ok;
    });

    it('非严格判定模式下数字(科学表示法)内容的字符串应该判定为true', () => {
        expect(ion.isNumber('1.5E13')).to.be.ok;
    });

    it('严格判定模式下数字内容的字符串应该判定为false', () => {
        expect(ion.isNumber('123', true)).to.not.be.ok;
    });

    it('null不应该判定为number', () => {
        expect(ion.isNumber(null)).to.not.be.ok;
    });

    it('false不应该判定为number', () => {
        expect(ion.isNumber(false)).to.not.be.ok;
    });

    it('undefined不应该判定为number', () => {
        expect(ion.isNumber(void(0))).to.not.be.ok;
    });

    it('空字符串不应该判定为number', () => {
        expect(ion.isNumber('')).to.not.be.ok;
    });

    it('数字与字母结合的字符串不应该判定为number', () => {
        expect(ion.isNumber('123fda13')).to.not.be.ok;
    });
});

describe('测试isInteger方法', () => {
    it('整数字面量应该被判定为整形', () => {
        expect(ion.isInteger(-123)).to.be.ok;
    });

    it('整数科学表示法字面量应该被判定为整形', () => {
        expect(ion.isInteger(1.2e13)).to.be.ok;
    });

    it('整数字符串应该被判定为整形', () => {
        expect(ion.isInteger('+123')).to.be.ok;
    });

    it('整数科学表示法字符串应该被判定为整形', () => {
        expect(ion.isInteger('-1.234E4')).to.be.ok;
    });

    it('小数字面量不应该被判定为整形', () => {
        expect(ion.isInteger(123.1)).to.not.be.ok;
    });

    it('负指数整数科学表示法字面量不应该被判定为整数', () => {
        expect(ion.isInteger(1234e-1)).to.not.be.ok;
    });

    it('小数科学表示法字面量不应该被判定为整形', () => {
        expect(ion.isInteger(1.223E2)).to.not.be.ok;
    });

    it('小数科学表示法字符串不应该被判定为整形', () => {
        expect(ion.isInteger('1.234e2')).to.not.be.ok;
    });

    it('严格判定模式下整数字符串不应该被判定为整形', () => {
        expect(ion.isInteger('123', true)).to.not.be.ok;
    });

    it('空字符串不应该被判定为整形', () => {
        expect(ion.isInteger('')).to.not.be.ok;
    });
});

describe('测试isObject方法', () => {
    it('对象字面量应该被判定为对象', () => {
        expect(ion.isObject({})).to.be.ok;
    });

    it('new的对象应该被判定为对象', () => {
        expect(ion.isObject(new Number())).to.be.ok;
    });

    it('正则表达式字面量应该被判定为对象', () => {
        expect(ion.isObject(/^a$/)).to.be.ok;
    });

    it('new Function不应该被判定为对象', () => {
        expect(ion.isObject(new Function())).to.not.be.ok;
    });

    it('null不应该被判定为对象', () => {
        expect(ion.isObject(null)).to.not.be.ok;
    });

    it('undefined不应该被判定为对象', () => {
        expect(ion.isObject(undefined)).to.not.be.ok;
    });
});

describe('测试isFunction方法', () => {
    it('new Function应该被判定为函数', () => {
        expect(ion.isFunction(new Function())).to.be.ok;
    });

    it('匿名函数应该被判定为函数', () => {
        let func = function () {return 1;}
        expect(ion.isFunction(function () {return 1;})).to.be.ok;
        expect(ion.isFunction(func)).to.be.ok;
    });

    it('箭头函数应该被判定为函数', () => {
        expect(ion.isFunction(() => {})).to.be.ok;
    });

    it('constructor应该被判定为函数', () => {
        expect(ion.isFunction(Number.constructor)).to.be.ok;
    });
});

describe('测试isSymbol方法', () => {
    it('Symbol()应该被判定为symbol', () => {
        expect(ion.isSymbol(Symbol())).to.be.ok;
    });

    it('Symbol包装对象应该被判定为函数', () => {
        expect(ion.isSymbol(Object(Symbol()))).to.be.ok;
    });
});

describe('测试isDate方法', () => {
    it('判定Date对象应该返回true', () => {
        expect(ion.isDate(new Date())).to.be.ok;
    });

    it('判定非Date对象应该返回false', () => {
        expect(ion.isDate(function () {})).to.not.be.ok;
    });
});

describe('测试isRegExp方法', () => {
    it('判定正则常量应该返回true', () => {
        expect(ion.isRegExp(/test/)).to.be.ok;
    });

    it('判定正则对象应该返回true', () => {
        expect(ion.isRegExp(new RegExp('test'))).to.be.ok;
    });

    it('判定非正则应该返回false', () => {
        expect(ion.isRegExp(123)).to.not.be.ok;
    });
});
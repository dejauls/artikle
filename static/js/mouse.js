const _0x5e0618 = _0x39b6;
(function(_0x2a3891, _0x68b48c) {
    const _0x29304f = _0x39b6
      , _0x421671 = _0x2a3891();
    while (!![]) {
        try {
            const _0x416fb8 = parseInt(_0x29304f(0x203)) / 0x1 + parseInt(_0x29304f(0x1fc)) / 0x2 * (parseInt(_0x29304f(0x1f8)) / 0x3) + parseInt(_0x29304f(0x1f1)) / 0x4 * (-parseInt(_0x29304f(0x1fd)) / 0x5) + parseInt(_0x29304f(0x1fe)) / 0x6 + parseInt(_0x29304f(0x1f7)) / 0x7 + -parseInt(_0x29304f(0x1f2)) / 0x8 + -parseInt(_0x29304f(0x200)) / 0x9 * (-parseInt(_0x29304f(0x202)) / 0xa);
            if (_0x416fb8 === _0x68b48c)
                break;
            else
                _0x421671['push'](_0x421671['shift']());
        } catch (_0x3b1bbd) {
            _0x421671['push'](_0x421671['shift']());
        }
    }
}(_0x16f1, 0xe839d));
const dots = []
  , mouse = {
    'x': 0x0,
    'y': 0x0
};
class Dot {
    constructor(_0x559164) {
        const _0x2edd61 = _0x39b6;
        this['x'] = 0x0,
        this['y'] = 0x0,
        this[_0x2edd61(0x1f4)] = ((()=>{
            const _0x1424b1 = _0x2edd61
              , _0x5f03f5 = document['createElement'](_0x1424b1(0x1fb));
            return _0x5f03f5['className'] = _0x559164,
            document['body'][_0x1424b1(0x201)](_0x5f03f5),
            _0x5f03f5;
        }
        )());
    }
    [_0x5e0618(0x1f3)]() {
        const _0xd63948 = _0x5e0618;
        this[_0xd63948(0x1f4)][_0xd63948(0x1f6)][_0xd63948(0x1f9)] = this['x'] + 'px',
        this['node']['style']['top'] = this['y'] + 'px';
    }
}
for (let i = 0x0; i < 0x64; i++) {
    dots[_0x5e0618(0x1fa)](new Dot(_0x5e0618(0x205)));
}
const headTrail = new Dot(_0x5e0618(0x1f5))
  , draw = ()=>{
    const _0xc1a26f = _0x5e0618;
    let {x: _0x4bdd80, y: _0x4e1012} = mouse;
    dots[_0xc1a26f(0x204)]((_0x534038,_0x47128d,_0x59f8fd)=>{
        const _0x4df2c5 = _0xc1a26f
          , _0x9a5298 = _0x59f8fd[_0x47128d + 0x1] || _0x59f8fd[0x0];
        _0x534038['x'] = _0x4bdd80,
        _0x534038['y'] = _0x4e1012,
        _0x534038[_0x4df2c5(0x1f3)](),
        _0x4bdd80 += (_0x9a5298['x'] - _0x534038['x']) * 0.04,
        _0x4e1012 += (_0x9a5298['y'] - _0x534038['y']) * 0.04;
    }
    ),
    headTrail['x'] = mouse['x'],
    headTrail['y'] = mouse['y'],
    headTrail[_0xc1a26f(0x1f3)]();
}
;
addEventListener(_0x5e0618(0x1ef), _0x30ea89=>{
    const _0x21462d = _0x5e0618;
    mouse['x'] = _0x30ea89[_0x21462d(0x1ff)] + 0x1,
    mouse['y'] = _0x30ea89[_0x21462d(0x1f0)] + 0x1;
}
);
function _0x39b6(_0x5f35f3, _0x4b0c12) {
    const _0x16f183 = _0x16f1();
    return _0x39b6 = function(_0x39b690, _0x30f032) {
        _0x39b690 = _0x39b690 - 0x1ef;
        let _0x46ddeb = _0x16f183[_0x39b690];
        return _0x46ddeb;
    }
    ,
    _0x39b6(_0x5f35f3, _0x4b0c12);
}
const animate = ()=>{
    draw(),
    requestAnimationFrame(animate);
}
;
function _0x16f1() {
    const _0x5e0628 = ['style', '670390rELqGr', '695883NipJcJ', 'left', 'push', 'div', '8YjGeFC', '50mgqAww', '758802aewWbi', 'pageX', '141597EzHYpO', 'appendChild', '400JTCbXG', '1151026YiQBLf', 'forEach', 'trail', 'mousemove', 'pageY', '585384vlzFlo', '4126160RsjEui', 'draw', 'node', 'head-trail'];
    _0x16f1 = function() {
        return _0x5e0628;
    }
    ;
    return _0x16f1();
}
animate();

import intersectionCheck from './intersectionCheck'

it('gives true with the rectangles intersect', () => {
  const pink = {"height": 250, "width": 350, x: 40, y:40, top: 40, bottom: 290};
  const blue = {"height": 250, "width": 350, x: 260, y:120, top: 120, bottom: 370} ;
  expect(intersectionCheck(pink, blue)).toEqual(false);
});

import { calcAreaSquare, calcAreaTriangle, calcAreaRectangle, calcAreaCircle } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test("Area Rectangle", () => {
    expect(calcAreaRectangle(10, 5)).toBe(50);
})

test("Rounded Area Circle", () =>{
    expect(calcAreaCircle(5)).toBe(79);
})
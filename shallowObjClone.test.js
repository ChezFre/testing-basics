import { shallowObjClone } from "./shallowObjClone";

describe("shallowObjClone", () => {
  it("makes a shallow clone of an object", () => {
    const obj = {
      a: 4,
      b: { c: 3 },
    };

    expect(shallowObjClone(obj).a).toBe(4);
    expect(shallowObjClone(obj)).toStrictEqual(obj);
    expect(shallowObjClone(obj)).not.toBe(obj);
    expect(shallowObjClone(obj).b).toBe(obj.b);
  });
});

const s4 = (): string => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

export function GuidGenerator (): string {
  return s4() + s4() + s4() + s4() + s4() + s4() + s4();
};

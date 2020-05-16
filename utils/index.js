export const stringToBase64 = typeof btoa === 'undefined' ? str => Buffer.from(str).toString('base64') : btoa
export const base64ToString = typeof atob === 'undefined' ? str => Buffer.from(str, 'base64').toString() : atob

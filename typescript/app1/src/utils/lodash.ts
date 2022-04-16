import _assign from 'lodash/assign'
import _sum from 'lodash/sum'

export function sum<T extends any> (list: T[]) {
  return _sum(list)  
}

export function assign (o1: object, o2: object) {
  return _assign({}, o1, o2)
}

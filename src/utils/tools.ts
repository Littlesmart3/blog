// 树形数组
export function getTreeList(list: Array<any>, pid: string): any[] {
  const res: Array<any> = [];
  const map: Array<any> = list.reduce((res, v) => ((res[v.id] = v), res), {});

  for (const item of list) {
    if (item[pid] === 0) {
      res.push(item);
      continue;
    }
    if (item[pid] in map) {
      const parent = map[item[pid]];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}

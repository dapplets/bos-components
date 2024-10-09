// Random ID used in chapters and pages for a unique context ID to create nested callouts in the future.
const generateRandomId = () => {
  return Math.random().toString(16).substring(2, 10)
}

const generateNewPage = () => ({
  id: generateRandomId(),
  title: '',
  status: [],
  content: '',
})

const generateNewChapter = () => ({
  id: generateRandomId(),
  type: 'infobox',
  pages: [generateNewPage()],
  skin: 'META_GUIDE',
})

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

// ToDo: naive deep compare
const isDeepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const isTargetEqual = (a, b) => {
  if (!a && !b) return true
  if (!a || !b || a.id !== b.id || a.namespace !== b.namespace || a.type !== b.type) return false
  return (!a.parent && !b.parent) || (a.parent && b.parent && isTargetEqual(a.parent, b.parent))
}

const clearTreeBranch = (node) => ({
  namespace: node.namespace,
  type: node.type,
  id: node.id,
  parent: node.parent ? clearTreeBranch(node.parent) : undefined,
})

return {
  generateNewPage,
  generateNewChapter,
  deepCopy,
  isDeepEqual,
  isTargetEqual,
  clearTreeBranch,
}

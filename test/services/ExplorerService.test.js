const ExplorerService = require('../../lib/services/ExplorerService')
describe('Suit test for ExplorerService', () => {
  test('1.1) FilterByMission invalid params', () => {
    const res = ExplorerService.filterByMission({}, 'node')
    expect(res).toMatch(/explorers should be an array/)
  })
  test('1.2) FilterByMission empty array', () => {
    const res = ExplorerService.filterByMission([], 'java')
    expect(res).toMatch(/explorers cannot be an empty array/)
  })
  test('1.3) FilterByMission invalid params', () => {
    const explorers = [{"name": "Woopa1" ,"mission": "node"}]
    const res = ExplorerService.filterByMission(explorers, 1)
    expect(res).toMatch(/mission should be a string/)
  })
  test('1.4) FilterByMission invalid params', () => {
    const explorers = [{"name": "Woopa1" ,"mission": "node"}]
    const res = ExplorerService.filterByMission(explorers, '')
    expect(res).toMatch(/invalid mission/)
  })
  test('1.5) FilterByMission correct params ', () => {
    const explorers = [
      {
        "name": "Woopa1",
        "mission": "node"
      },
      {
        "name": "Woopa2",
        "mission": "node"
      },
      {
        "name": "Woopa3",
        "mission": "java"
      }
    ]
    const res = ExplorerService.filterByMission(explorers, 'java')
    expect(res).toEqual([{"name": "Woopa3", "mission": "java"}])
  })

  test('2.1) FilterByMission invalid params', () => {
    const res = ExplorerService.getAmountOfExplorersByMission({}, 'node')
    expect(res).toMatch(/explorers should be an array/)
  })
  test('2.2) FilterByMission empty array', () => {
    const res = ExplorerService.getAmountOfExplorersByMission([], 'java')
    expect(res).toMatch(/explorers cannot be an empty array/)
  })
  test('2.3) FilterByMission invalid params', () => {
    const explorers = [{"name": "Woopa1" ,"mission": "node"}]
    const res = ExplorerService.getAmountOfExplorersByMission(explorers, 1)
    expect(res).toMatch(/mission should be a string/)
  })
  test('2.4) FilterByMission invalid params', () => {
    const explorers = [{"name": "Woopa1" ,"mission": "node"}]
    const res = ExplorerService.getAmountOfExplorersByMission(explorers, '')
    expect(res).toMatch(/invalid mission/)
  })
  test('2.5) FilterByMission correct params ', () => {
    const explorers = [
      {
        "name": "Woopa1",
        "mission": "node"
      },
      {
        "name": "Woopa2",
        "mission": "node"
      },
      {
        "name": "Woopa3",
        "mission": "java"
      }
    ]
    const res = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')
    expect(res).toBe(2)
  })

  test('3.1) FilterByMission invalid params', () => {
    const res = ExplorerService.getExplorersUsernamesByMission({}, 'node')
    expect(res).toMatch(/explorers should be an array/)
  })
  test('3.2) FilterByMission empty array', () => {
    const res = ExplorerService.getExplorersUsernamesByMission([], 'java')
    expect(res).toMatch(/explorers cannot be an empty array/)
  })
  test('3.3) FilterByMission invalid params', () => {
    const explorers = [{"name": "Woopa1" ,"mission": "node"}]
    const res = ExplorerService.getExplorersUsernamesByMission(explorers, 1)
    expect(res).toMatch(/mission should be a string/)
  })
  test('3.4) FilterByMission invalid params', () => {
    const explorers = [{"name": "Woopa1" ,"mission": "node"}]
    const res = ExplorerService.getExplorersUsernamesByMission(explorers, '')
    expect(res).toMatch(/invalid mission/)
  })
  test('3.5) FilterByMission correct params ', () => {
    const explorers = [
      {
        "name": "Woopa1",
        "mission": "node"
      },
      {
        "name": "Woopa2",
        "mission": "node"
      },
      {
        "name": "Woopa3",
        "mission": "java"
      }
    ]
    const res = ExplorerService.getExplorersUsernamesByMission(explorers, 'node')
    expect(res).toEqual( ["Woopa1", "Woopa2"])
  })
})

const ExplorerController = require('../../lib/controllers/ExplorerController')
describe('Suit test for ExplorerController', () => {
  test('1.1) FilterByMission wrong type of params', () => {
    const res = ExplorerController.getExplorersByMission(1)
    expect(res).toMatch(/mission should be a string/)
  })
  test('1.2) FilterByMission invalid params', () => {
    const explorers = [{ name: 'Woopa1', mission: 'node' }]
    const res = ExplorerController.getExplorersByMission('')
    expect(res).toMatch(/invalid mission/)
  })
  test('1.3) FilterByMission correct params ', () => {
    const expectedRes = [
      {
        name: 'Woopa6',
        githubUsername: 'ajolonauta6',
        score: 6,
        mission: 'java',
        stacks: ['elm'],
      },
      {
        name: 'Woopa7',
        githubUsername: 'ajolonauta7',
        mission: 'java',
        score: 7,
        stacks: [],
      },
      {
        name: 'Woopa8',
        githubUsername: 'ajolonauta8',
        score: 8,
        mission: 'java',
        stacks: ['elm'],
      },
      {
        name: 'Woopa9',
        githubUsername: 'ajolonauta9',
        score: 9,
        mission: 'java',
        stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm'],
      },
      {
        name: 'Woopa10',
        githubUsername: 'ajolonauta10',
        score: 10,
        mission: 'java',
        stacks: ['javascript', 'elixir', 'groovy', 'reasonML', 'elm'],
      },
    ]
    const res = ExplorerController.getExplorersByMission('java')
    expect(res).toEqual(expectedRes)
  })
  test('2.1) getAmountOfByMission invalid params', () => {
    const res = ExplorerController.getExplorersAmonutByMission(1)
    expect(res).toMatch(/mission should be a string/)
  })
  test('2.2) getAmountOfByMission invalid params', () => {
    const res = ExplorerController.getExplorersAmonutByMission('')
    expect(res).toMatch(/invalid mission/)
  })
  test('2.3) getAmountOfByMission correct params ', () => {
    const res = ExplorerController.getExplorersAmonutByMission('node')
    expect(res).toBe(10)
  })

  test('3.1) getUsernamesByMission invalid params', () => {
    const res = ExplorerController.getExplorersUsernamesByMission(1)
    expect(res).toMatch(/mission should be a string/)
  })
  test('3.2) getUsernamesByMission invalid params', () => {
    const res = ExplorerController.getExplorersUsernamesByMission('')
    expect(res).toMatch(/invalid mission/)
  })
  test('3.3) getUsernamesByMission correct params ', () => {
    const expectedRes = ['Woopa6', 'Woopa7', 'Woopa8', 'Woopa9', 'Woopa10']
    const res = ExplorerController.getExplorersUsernamesByMission('java')
    expect(res).toEqual(expectedRes)
  })
})

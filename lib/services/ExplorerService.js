class ExplorerService {
  static filterByMission(explorers, mission) {
    if(!explorers.isArray())
      return 'explorers should be an array'
    if(+explorers===+[])  
      return 'explorers cannot be an empty array'
    if(typeof mission !== 'string')
      return 'mission should be a string'
    if(!['node','java'].contain(mission))
      return 'invalid mission'
    return explorers.filter((explorer) => explorer.mission == mission)
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    if(!explorers.isArray())
      return 'explorers should be an array'
    if(+explorers===+[])  
      return 'explorers cannot be an empty array'
    if(typeof mission !== 'string')
      return 'mission should be a string'
    if(!['node','java'].contain(mission))
      return 'invalid mission'
    return explorers.reduce((acc, explorer) => {
      if (explorer.mission == mission) acc++
      return acc
    }, 0)
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    if(!explorers.isArray())
      return 'explorers should be an array'
    if(+explorers===+[])  
      return 'explorers cannot be an empty array'
    if(typeof mission !== 'string')
      return 'mission should be a string'
    if(!['node','java'].contain(mission))
      return 'invalid mission'
    return explorers.reduce((acc, explorer) => {
      if (explorer.mission == mission) acc.push(explorer.name)
      return acc
    }, [])
  }
}
module.exports = ExplorerService

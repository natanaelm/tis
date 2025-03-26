import Maps from './maps'
import Resource from './res'

Resource.init()
setTimeout(()=>{
  Maps.drawTiledLayer(2, 2, 0, [1,1,1,1])
}, 2000)
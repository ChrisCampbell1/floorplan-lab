import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";

const FloorPlan = (params) => {
  return ( 
    <div>
      <h3>This is a floorplan comp</h3>
      <Bedroom num={1}/>
      <Kitchen />
      <Bedroom num={2}/>
      <Bedroom num={3}/>
    </div>
  )
}

export default FloorPlan;

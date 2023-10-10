

export const Filter = ({ filterName , onFilter }) => {

    return (
        <div> 
          <input  
          type="text"
          value={filterName}
          onChange={evt => onFilter('name', evt.target.value)}
          placeholder="Filter by name..."/>
          </div>
        )
    }
    
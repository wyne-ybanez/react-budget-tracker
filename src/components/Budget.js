import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
  // We exported budget in App Context Provider
  const { budget } = useContext(AppContext)

  return (
    <div className="alert alert-secondary">
      <span>Budget: €{budget}</span>
    </div>
  )
}

export default Budget

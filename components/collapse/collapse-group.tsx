import React, { useState, useEffect } from 'react'
import { Provider } from './collapse-context'

const CollapseGroup = ({
  children,
  hashToSection
}: {
  children: React.ReactNode
  hashToSection?: Record<string, string>
}) => {
  const [selected, setSelected] = useState('')
  const [initialScrollTarget, setInitialScrollTarget] = useState('')
  const onChange = (title: string) => {
    setSelected(title)
  }

  useEffect(() => {
    const hash = location.hash.substring(1)
    if (hashToSection && hashToSection[hash]) {
      setSelected(hashToSection[hash])
      setInitialScrollTarget(hashToSection[hash])
    }
  }, [])

  return (
    <div className="collapse-group">
      <Provider
        value={{
          selected,
          initialScrollTarget,
          onChange
        }}
      >
        {children}
      </Provider>
      <style jsx>{`
        .collapse-group {
          border-top: 1px solid var(--accents-2);
        }
      `}</style>
    </div>
  )
}

export default CollapseGroup

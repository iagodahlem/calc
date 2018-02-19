import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { numerics, actions } from '../../constants/keys'
import * as calcActions from '../../actions/calcActions'
import * as uiActions from '../../actions/uiActions'
import * as fromCalc from '../../reducers/calcReducer'
import * as fromUi from '../../reducers/uiReducer'
import './App.css'

export class App extends Component {
  handleClickToggle = () => {
    this.props.toggleHistory()
  }

  handleClick = (action, label, value) => {
    this.props.calc(action, label, value)
  }

  render() {
    const { title, history, current, showHistory } = this.props

    return (
      <main className='App'>
        <header className={`Header ${!title ? 'Header--transparent' : ''}`}>
          <h2 className='Header__title'>{title}</h2>

          <button className='Button Header__toggle' onClick={this.handleClickToggle}>
            <span className='Header__toggle__bullet' />
            <span className='Header__toggle__bullet' />
            <span className='Header__toggle__bullet' />
          </button>
        </header>

        <div className='App__container'>
          {
            showHistory ? (
              <section className='HistoryList'>
                {history.map(({ display, result }, i) => (
                  <div className='History' key={i}>
                    <h2 className='History__display'>{display}</h2>
                    <h3 className='History__result'>{result}</h3>
                  </div>
                ))}
              </section>
            ) : (
              <Fragment>
                <section className='Screen'>
                  <h2 className='Screen__display'>{current.display}</h2>
                  <h3 className='Screen__result'>{current.result}</h3>
                </section>

                <section className='Keyboard'>
                  <div className='Keyboard__numerics'>
                    {numerics.map(({ label, action, value }) => (
                      <button
                        className='Button Keyboard__key'
                        onClick={() => this.handleClick(action, label, value)}
                        key={label}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className='Keyboard__actions'>
                    {actions.map(({ label, action, value }) => (
                      <button
                        className='Button Keyboard__key Keyboard__key--action'
                        onClick={() => this.handleClick(action, label, value)}
                        key={label}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </section>
              </Fragment>
            )
          }
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  history: fromCalc.getHistory(state),
  current: fromCalc.getCurrent(state),
  title: fromUi.getTitle(state),
  showHistory: fromUi.getHistory(state),
})

const mapDispatchToProps = (dispatch) => ({
  calc: (action, label, value) => dispatch(calcActions.calc(action, label, value)),
  toggleHistory: () => dispatch(uiActions.toggleHistory()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

import { createContext, useReducer, useState } from 'react'
import { thongbaochungReducer } from '../reducers/thongbaochungReducer'
import {
	apiUrl,
	TB_LOADED_FAIL,
	TB_LOADED_SUCCESS,
	ADD_TB,
	DELETE_TB,
	UPDATE_TB,
	FIND_TB
} from './constant'
import axios from 'axios'

export const ThongbaochungContext = createContext()

const ThongbaochungContextProvider = ({ children }) => {
	// State
	const [thongbaochungState, dispatch] = useReducer(thongbaochungReducer, {
		thongbaochung: null,
		thongbaochungs: [],
		thongbaochungsLoading: true
	})

	// Get all thongbaochungs
	const getThongbaochungs = async () => {
		try {
			const response = await axios.get(`${apiUrl}/thongbao/thongbaochung`)
			if (response.data.success) {
				dispatch({ type: TB_LOADED_SUCCESS, payload: response.data.thongbaochungs })
			}
		} catch (error) {
			dispatch({ type: TB_LOADED_FAIL })
		}
	}
	// thongbaochung context data
	const ThongbaochungContextData = {
		thongbaochungState,
		getThongbaochungs
	}

	return (
		<ThongbaochungContext.Provider value={ThongbaochungContextData}>
			{children}
		</ThongbaochungContext.Provider>
	)
}

export default ThongbaochungContextProvider
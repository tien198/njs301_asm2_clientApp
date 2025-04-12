import { create } from 'zustand'

const initialState = {
    date: [{
        startDate: new Date(), endDate: new Date(), key: 'selection'
    }],
    fullName: '',
    email: '',
    hotelId: '',
    // rooms: [{ roomId: '', roomNumbers: [''] }],
    rooms: [],
    bookedRooms: [],
    price: 0,
    payment: 'Credit',
    phone: '',
    cardNumber: '',
}

const useStoreReserveForm = create(set => ({
    // dateRange value format (in DateRange library)
    date: initialState.date,
    setDate: (val) => set(() => ({ date: val })),

    fullName: initialState.fullName,
    setFullName: (val) => set(() => ({ fullName: val })),

    email: initialState.email,
    setEmail: (val) => set(() => ({ email: val })),

    hotelId: initialState.hotelId,
    setHotelId: (val) => set(() => ({ hotelId: val })),

    // rooms: [{ roomId: '', roomNumbers: [''] }],
    rooms: initialState.rooms,
    setRooms: (val) => set(() => ({ rooms: val })),

    bookedRooms: initialState.bookedRooms,
    setBookedRooms: (val) => set(() => ({ bookedRooms: val })),

    price: initialState.price,
    setPrice: (val) => set(() => ({ price: val })),

    payment: initialState.payment,
    setPayment: (val) => set(() => ({ payment: val })),

    phone: initialState.phone,
    setPhone: (val) => set(() => ({ phone: val })),

    cardNumber: initialState.cardNumber,
    setCardNumber: (val) => set(() => ({ cardNumber: val })),

    resetForm: () => set(() => initialState)
}))

export default useStoreReserveForm
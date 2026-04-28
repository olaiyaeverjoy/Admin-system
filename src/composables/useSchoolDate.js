import {terms} from '../config/terms.js'
import {computed} from 'vue'

//reusable func 
//var now is a reactive value that re-evaluates and returns the current date/time
//uses now.value cos its a computed ref.... this formats the name to a weekday name
export default function useSchoolDate() {
    const now = computed(() => new Date(), 1000)

    const dayName = computed(() =>
        now.value.toLocaleDateString('en-GB', {weekday: 'long'})
    )

    const dateString = computed(() =>
        now.value.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})
    )


    //cal if sch is in session or on holiday
    const termInfo = computed(() => {
        const today = now.value
        for (const t of terms) {
            //convertiing terms start and end to actual date obj
            const start = new Date(t.start)
            const end = new Date(t.end)
            //checks if current date falls within a term 
            if (today >= start && today <= end) {
                const weekNum = Math.ceil((today - start) / (7 * 24 * 60 * 60 * 1000)) + 1
                return `Term ${t.term}, Week ${weekNum}`
            }
        }
        return 'School Holiday'
    })

    return {dayName, dateString, termInfo}
}
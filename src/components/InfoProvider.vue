 <template>
    <b-container>
    <b-card title="Add a Flight" bg-variant="light" class="text-center">
    <b-form @submit="onSubmit">
        <b-form-group
            label-cols-sm="3"
            label="Flight:"
            label-align-sm="center"
            label-for="nested-flight"
            required
        >
            <b-form-input 
            id="nested-flight"
            type="text"
            v-model.trim="form.flight"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="From:"
            label-align-sm="center"
            label-for="nested-from"
            required
        >
            <b-form-input 
            id="nested-from"
            type="text"
            v-model.trim="form.from"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="To:"
            label-align-sm="center"
            label-for="nested-to"
            required
        >
            <b-form-input id="nested-to"
            type="text"
            v-model.trim="form.to"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Date:"
            label-align-sm="center"
            label-for="nested-date"
            required
        >
            <b-form-input id="nested-date"
            type="date"
            v-model.trim="form.date"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Airlines:"
            label-align-sm="center" class="mb-0"
            required
        >
            <b-form-radio-group
            v-model.trim="form.airlines"
            class="pt-2"
            :options="airlinescom"
            ></b-form-radio-group>
        </b-form-group>
        <br/>

        <b-form-group
            label-cols-sm="3"
            label="Info (optional):"
            label-align-sm="center"
            label-for="nested-info"
        >
            <b-form-input id="nested-info"
            type="text"
            v-model.trim="form.info"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Country:"
            label-align-sm="center"
            label-for="nested-country"
            required
        >
            <b-form-input id="nested-country"
            type="text"
            v-model.trim="form.country"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label-cols-sm="3"
            label="Source:"
            label-align-sm="center"
            label-for="nested-source"
            required
        >
            <b-form-input 
            id="nested-source"
            type="url"
            v-model.trim="form.source"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-card>
    </b-container>
 </template>

<script>
// import firebase from '../firebase'
import { firestoreDb } from '../firebase'
import router from '../router'

export default {
    name: 'InfoProvider',
    data() {
      return {
        ref: firestoreDb.collection('flights'),
        flights: [],
        form: {
          flight: '' ,
          from: '',
          to: '',
          date: '',
          airlines: '',
          info: '',
          country: '',
          source: ''
        },
        airlinescom:['Airlines China', 
            'Southern China Airlines', 
            'Hainan Airlines',
            'Sichuan Airlines',
            'Eastern China Airlines',
            'Cathy Airlines',
            'Quantas',
            'Virgin',
            'Asia',
            'Other'],
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))

        this.ref.add(this.form).then(() => {
            this.form.flight = '' 
          this.form.from = ''
          this.form.to = ''
          this.form.date = ''
          this.form.airlines = ''
          this.form.info = ''
          this.form.country = ''
          this.form.source = ''
          router.push({
              name: 'PassengerSearch'
          })
        })
        .catch((error) => {
            alert("Error adding document: ", error);
        })
      }
    }
}
</script>
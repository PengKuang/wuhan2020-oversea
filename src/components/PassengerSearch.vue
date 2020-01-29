<template>
  <div class="container">
    <h3>Users:</h3>
    <table class="table">
      <thead>
        <tr>
          <!-- <th scope="col">Id</th> -->
          <th scope="col">Date</th>
          <th scope="col">Flight</th>
          <th scope="col">Airlines</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Information</th>
          <th scope="col">Country</th>
          <th scope="col">Source</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="flight in flights" v-bind:key="flight.id"> 
          <!-- <th scope="row">{{flight.id}}</th> -->
          <td>{{flight.date}}</td>
          <td>{{flight.flight}}</td>
          <td>{{flight.airlines}}</td>
          <td>{{flight.from}}</td>
          <td>{{flight.to}}</td>
          <td>{{flight.info}}</td>
          <td>{{flight.country}}</td>
          <td>{{flight.source}}</td>
        </tr>
      </tbody>
    </table> 
  </div> 
</template>

<script>
// import axios from 'axios';
// import firebase from 'firebase/app'
import { firestoreDb } from '../firebase'

export default {
    name: 'PassengerSearch',
    data(){
        return {
            users: null,
            flights: [],
            ref: firestoreDb.collection('flights')
        };
    },
    // created: function(){
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //       this.users = res.data;
    //     })
    // }
    created() {
      this.ref.onSnapshot((querySnapshot) => {
      this.flights = [];
      querySnapshot.forEach((doc) => {
        this.flights.push({
          id: doc.id,
          date: doc.data().date,
          flight: doc.data().flight,
          airlines: doc.data().airlines,
          from: doc.data().from,
          to: doc.data().to,
          country: doc.data().country,
          info: doc.data().info,
          source: doc.data().source
        });
      });
    });
      // console.log(JSON.stringify(this.flights));
    }
}
</script>
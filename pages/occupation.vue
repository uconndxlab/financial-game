<template>
<v-container>
    <v-row>

    <v-col>
        <h1>{{occupation.name}}</h1>
        <v-simple-table v-if="occupation">
            <template v-slot:default>
                <thead>
                    <th>
                    <td>Occupation Details</td>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Starting Rate</td>
                        <td>
                            {{ $money(occupation.hourly_rate_entry) }}/hr
                        </td>
                    </tr>
                    <tr>
                        <td>Monthly Gross Income</td>
                        <td>{{ $money(occupation.monthly_gross) }}</td>
                    </tr>
                    <tr>
                        <td>Monthly Taxes</td>
                        <td>{{ $money(occupation.monthly_taxes)}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

    </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-btn to="/housing" color="secondary">Continue...</v-btn>
        </v-col>
    </v-row>
    </v-container>

</template>

<script>

export default {
    head: {
        title: 'Occupation',
    },
    name: 'OccupationPage',
    data() {
        return {
            occupation: this.$store.state.budget.occupation
        }
    }
}
</script>
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6hwu00t4d01xx86ec225x/master',
  headers: {
    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTY2MzIyMzksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG82aHd1MDB0NGQwMXh4ODZlYzIyNXgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTMxM2UxZDQtZmM5Ni00OWUwLTg4NmItZGQ2NDYwYmU5ZjQ1IiwianRpIjoiY2w1MW8yOTR6MXJ0djAxdWk4aG9kNHQzYiJ9.v68Dsu6RkmAru6KSMp4SpUywi2R32tgMaW8RQ4lmX8m2TjdNi6kEqupGHntTfC3dDQxvDOxBUXXpex1mAANDDxsgoJTfvfAAn2I8cLk6u7b_dRzmIQ2znysyj299RZdNrL72oCV8wDDIm3-YPdIcW57xb67KjIu0K-VUxsq-HBIKXmpuRgq4_gEdet2RoVw55g7C38XYyfCqc8rvcWaEtgssDFBVD2Ubu0haZKF2d86Mr4ZyKvxcMjad7OYIu4DE24mxoJUp9lZxtEW13DZb4Dm8rEW4uNMNBie9s-HCsafWBLExyU5ArRLJqyOoWfPAxLzL8pkOeMG4zeJC9k-Q_lCUD5wCXSY5oRcvRTvyl3zm_JXTXYWwydpahfh4m1DR3Pxp65A2vAWc45p1Y2Vq0EIFpDb--eNGqYBmmCnzeCmkOlvnwEIaz8kuLXJ0mX0ZyfPdqJTVM-AkwpoQDSvSuqR57QMLCpxsEJmQ3L3Q91tD_l4MQHpcqRf0aedpBbhpgdckmC_NCa8Yt0cMA9_kqm8_b_kEdEu_-KnJMzIcx7Ga0PkvFJLtNJVYd9UZvjFf8qyisMR6zfRmVmprsnfWgfnHolSnYEQzBQS3aSBuDjgjvvs4XDeoAC9mmEf6a7SHctZ8y8pV70SuviVIltD-jZ2qqyoQZloimxiA7ntb1Uo`
  },
  cache: new InMemoryCache()
})
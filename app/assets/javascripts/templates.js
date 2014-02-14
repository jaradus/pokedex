<script id="pokemon_template" type="text/template">
 <tr>
     <td>
     <img src=<%= image_url %> />
     </td>
     <td>
     <h1><%= name %></h1>
     </td>
 </tr>
 <tr>
   <td>
    </td>
      <td>
        <ul>
          <li>Attack: <%= attack %></li>
          <li>Catch Rate: <%= catch_rate %></li>
          <li>Defense: <%= defense %></li>
          <li>Egg Cycles: <%= egg_cycles %></li>
          <li>EV Yield: <%= ev_yield %></li>
          <li>Exp: <%= exp %></li>
          <li>Growth Rate: <%= growth_rate %></li>
          <li>Happiness: <%= happiness %></li>
          <li>Height: <%= height %></li>
          <li>HP: <%= hp %></li>
          <li>Male-to-Female Ratio: <%= male_female_ratio %></li>
          <li>SP Attack: <%= sp_atk %></li>
          <li>SP Defense: <%= sp_def %></li>
          <li>Species: <%= species %></li>
          <li>Speed: <%= speed %></li>
          <li>Total: <%= total %></li>
          <li>Weight: <%= weight %></li>
        </ul>
     </td>
 </tr>
</script>
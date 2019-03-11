<div class="md-layout">
  <div class="md-layout-item md-size-100">
    <nav-tabs-card no-label>
      <template slot="content">
        <md-tabs md-sync-route class="md-primary" md-alignment="left">

          <md-tab id="tab-home" md-label="Profile" md-icon="face">
            <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
          </md-tab>

          <md-tab id="tab-pages" md-label="Messages" md-icon="chat">
            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
          </md-tab>

          <md-tab id="tab-posts" md-label="Settings" md-icon="build">
            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
          </md-tab>
        </md-tabs>
      </template>
    </nav-tabs-card>
  </div>
</div>
<script>
import {
  NavTabsCard
} from '@/components'

export default{
  components: {
    NavTabsCard
  },
  data () {
    return {
      selected: [],
      firstTabs: [
        { tab: 'Sign contract for "What are conference organizers afraid of?"' },
        { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
      ],
      secondTabs: [
        { tab: 'Sign contract for "What are conference organizers afraid of?"' },
        { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
      ],
      thirdTabs: [
        { tab: 'Sign contract for "What are conference organizers afraid of?"' },
        { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
      ]
    }
  }

}
</script>
/*

https://jsbin.com/punedofofu/edit?css,js,output

Get Data from:
https://api.stackexchange.com/docs/associated-users#page=2&pagesize=100&ids=<Meta SE USERID>&filter=!2*vfOzhyosgwPu)gn0xNx&run=true

*/

var data = {"items": [{"site_url": "http://stackoverflow.com"},{"site_url": "http://serverfault.com"},{"site_url": "http://superuser.com"},{"site_url": "http://meta.stackexchange.com"},{"site_url": "http://webapps.stackexchange.com"},{"site_url": "http://gaming.stackexchange.com"},{"site_url": "http://webmasters.stackexchange.com"},{"site_url": "http://cooking.stackexchange.com"},{"site_url": "http://gamedev.stackexchange.com"},{"site_url": "http://photo.stackexchange.com"},{"site_url": "http://stats.stackexchange.com"},{"site_url": "http://math.stackexchange.com"},{"site_url": "http://diy.stackexchange.com"},{"site_url": "http://gis.stackexchange.com"},{"site_url": "http://tex.stackexchange.com"},{"site_url": "http://askubuntu.com"},{"site_url": "http://money.stackexchange.com"},{"site_url": "http://english.stackexchange.com"},{"site_url": "http://stackapps.com"},{"site_url": "http://ux.stackexchange.com"},{"site_url": "http://unix.stackexchange.com"},{"site_url": "http://wordpress.stackexchange.com"},{"site_url": "http://cstheory.stackexchange.com"},{"site_url": "http://apple.stackexchange.com"},{"site_url": "http://rpg.stackexchange.com"},{"site_url": "http://bicycles.stackexchange.com"},{"site_url": "http://softwareengineering.stackexchange.com"},{"site_url": "http://electronics.stackexchange.com"},{"site_url": "http://android.stackexchange.com"},{"site_url": "http://boardgames.stackexchange.com"},{"site_url": "http://physics.stackexchange.com"},{"site_url": "http://homebrew.stackexchange.com"},{"site_url": "http://security.stackexchange.com"},{"site_url": "http://writers.stackexchange.com"},{"site_url": "http://video.stackexchange.com"},{"site_url": "http://graphicdesign.stackexchange.com"},{"site_url": "http://dba.stackexchange.com"},{"site_url": "http://scifi.stackexchange.com"},{"site_url": "http://codereview.stackexchange.com"},{"site_url": "http://codegolf.stackexchange.com"},{"site_url": "http://quant.stackexchange.com"},{"site_url": "http://pm.stackexchange.com"},{"site_url": "http://skeptics.stackexchange.com"},{"site_url": "http://fitness.stackexchange.com"},{"site_url": "http://drupal.stackexchange.com"},{"site_url": "http://mechanics.stackexchange.com"},{"site_url": "http://parenting.stackexchange.com"},{"site_url": "http://sharepoint.stackexchange.com"},{"site_url": "http://music.stackexchange.com"},{"site_url": "http://sqa.stackexchange.com"},{"site_url": "http://judaism.stackexchange.com"},{"site_url": "http://german.stackexchange.com"},{"site_url": "http://japanese.stackexchange.com"},{"site_url": "http://philosophy.stackexchange.com"},{"site_url": "http://gardening.stackexchange.com"},{"site_url": "http://travel.stackexchange.com"},{"site_url": "http://productivity.stackexchange.com"},{"site_url": "http://crypto.stackexchange.com"},{"site_url": "http://dsp.stackexchange.com"},{"site_url": "http://french.stackexchange.com"},{"site_url": "http://christianity.stackexchange.com"},{"site_url": "http://bitcoin.stackexchange.com"},{"site_url": "http://linguistics.stackexchange.com"},{"site_url": "http://hermeneutics.stackexchange.com"},{"site_url": "http://history.stackexchange.com"},{"site_url": "http://bricks.stackexchange.com"},{"site_url": "http://spanish.stackexchange.com"},{"site_url": "http://scicomp.stackexchange.com"},{"site_url": "http://movies.stackexchange.com"},{"site_url": "http://chinese.stackexchange.com"},{"site_url": "http://biology.stackexchange.com"},{"site_url": "http://poker.stackexchange.com"},{"site_url": "http://mathematica.stackexchange.com"},{"site_url": "http://cogsci.stackexchange.com"},{"site_url": "http://outdoors.stackexchange.com"},{"site_url": "http://martialarts.stackexchange.com"},{"site_url": "http://sports.stackexchange.com"},{"site_url": "http://academia.stackexchange.com"},{"site_url": "http://cs.stackexchange.com"},{"site_url": "http://workplace.stackexchange.com"},{"site_url": "http://windowsphone.stackexchange.com"},{"site_url": "http://chemistry.stackexchange.com"},{"site_url": "http://chess.stackexchange.com"},{"site_url": "http://raspberrypi.stackexchange.com"},{"site_url": "http://russian.stackexchange.com"},{"site_url": "http://islam.stackexchange.com"},{"site_url": "http://patents.stackexchange.com"},{"site_url": "http://genealogy.stackexchange.com"},{"site_url": "http://robotics.stackexchange.com"},{"site_url": "http://expressionengine.stackexchange.com"},{"site_url": "http://politics.stackexchange.com"},{"site_url": "http://anime.stackexchange.com"},{"site_url": "http://magento.stackexchange.com"},{"site_url": "http://ell.stackexchange.com"},{"site_url": "http://sustainability.stackexchange.com"},{"site_url": "http://reverseengineering.stackexchange.com"},{"site_url": "http://networkengineering.stackexchange.com"},{"site_url": "http://opendata.stackexchange.com"},{"site_url": "http://freelancing.stackexchange.com"},{"site_url": "http://blender.stackexchange.com"},{"site_url": "http://mathoverflow.net"},{"site_url": "http://space.stackexchange.com"},{"site_url": "http://sound.stackexchange.com"},{"site_url": "http://astronomy.stackexchange.com"},{"site_url": "http://tor.stackexchange.com"},{"site_url": "http://pets.stackexchange.com"},{"site_url": "http://ham.stackexchange.com"},{"site_url": "http://italian.stackexchange.com"},{"site_url": "http://pt.stackoverflow.com"},{"site_url": "http://aviation.stackexchange.com"},{"site_url": "http://ebooks.stackexchange.com"},{"site_url": "http://alcohol.stackexchange.com"},{"site_url": "http://softwarerecs.stackexchange.com"},{"site_url": "http://arduino.stackexchange.com"},{"site_url": "http://cs50.stackexchange.com"},{"site_url": "http://expatriates.stackexchange.com"},{"site_url": "http://matheducators.stackexchange.com"},{"site_url": "http://earthscience.stackexchange.com"},{"site_url": "http://joomla.stackexchange.com"},{"site_url": "http://datascience.stackexchange.com"},{"site_url": "http://puzzling.stackexchange.com"},{"site_url": "http://craftcms.stackexchange.com"},{"site_url": "http://buddhism.stackexchange.com"},{"site_url": "http://hinduism.stackexchange.com"},{"site_url": "http://communitybuilding.stackexchange.com"},{"site_url": "http://startups.stackexchange.com"},{"site_url": "http://worldbuilding.stackexchange.com"},{"site_url": "http://ja.stackoverflow.com"},{"site_url": "http://emacs.stackexchange.com"},{"site_url": "http://hsm.stackexchange.com"},{"site_url": "http://economics.stackexchange.com"},{"site_url": "http://lifehacks.stackexchange.com"},{"site_url": "http://engineering.stackexchange.com"},{"site_url": "http://coffee.stackexchange.com"},{"site_url": "http://vi.stackexchange.com"},{"site_url": "http://musicfans.stackexchange.com"},{"site_url": "http://woodworking.stackexchange.com"},{"site_url": "http://civicrm.stackexchange.com"},{"site_url": "http://health.stackexchange.com"},{"site_url": "http://ru.stackoverflow.com"},{"site_url": "http://rus.stackexchange.com"},{"site_url": "http://mythology.stackexchange.com"},{"site_url": "http://law.stackexchange.com"},{"site_url": "http://opensource.stackexchange.com"},{"site_url": "http://elementaryos.stackexchange.com"},{"site_url": "http://portuguese.stackexchange.com"},{"site_url": "http://computergraphics.stackexchange.com"},{"site_url": "http://hardwarerecs.stackexchange.com"},{"site_url": "http://es.stackoverflow.com"},{"site_url": "http://3dprinting.stackexchange.com"},{"site_url": "http://latin.stackexchange.com"}],"has_more": true,"total": 151};

var allSites = [{"site_url": "http://stackoverflow.com","site_type": "main_site"},{"site_url": "http://serverfault.com","site_type": "main_site"},{"site_url": "http://superuser.com","site_type": "main_site"},{"site_url": "http://meta.stackexchange.com","site_type": "main_site"},{"site_url": "http://webapps.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.webapps.stackexchange.com","site_type": "meta_site"},{"site_url": "http://gaming.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.gaming.stackexchange.com","site_type": "meta_site"},{"site_url": "http://webmasters.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.webmasters.stackexchange.com","site_type": "meta_site"},{"site_url": "http://cooking.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.cooking.stackexchange.com","site_type": "meta_site"},{"site_url": "http://gamedev.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.gamedev.stackexchange.com","site_type": "meta_site"},{"site_url": "http://photo.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.photo.stackexchange.com","site_type": "meta_site"},{"site_url": "http://stats.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.stats.stackexchange.com","site_type": "meta_site"},{"site_url": "http://math.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.math.stackexchange.com","site_type": "meta_site"},{"site_url": "http://diy.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.diy.stackexchange.com","site_type": "meta_site"},{"site_url": "http://meta.superuser.com","site_type": "meta_site"},{"site_url": "http://meta.serverfault.com","site_type": "meta_site"},{"site_url": "http://gis.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.gis.stackexchange.com","site_type": "meta_site"},{"site_url": "http://tex.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.tex.stackexchange.com","site_type": "meta_site"},{"site_url": "http://askubuntu.com","site_type": "main_site"},{"site_url": "http://meta.askubuntu.com","site_type": "meta_site"},{"site_url": "http://money.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.money.stackexchange.com","site_type": "meta_site"},{"site_url": "http://english.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.english.stackexchange.com","site_type": "meta_site"},{"site_url": "http://stackapps.com","site_type": "main_site"},{"site_url": "http://ux.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.ux.stackexchange.com","site_type": "meta_site"},{"site_url": "http://unix.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.unix.stackexchange.com","site_type": "meta_site"},{"site_url": "http://wordpress.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.wordpress.stackexchange.com","site_type": "meta_site"},{"site_url": "http://cstheory.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.cstheory.stackexchange.com","site_type": "meta_site"},{"site_url": "http://apple.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.apple.stackexchange.com","site_type": "meta_site"},{"site_url": "http://rpg.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.rpg.stackexchange.com","site_type": "meta_site"},{"site_url": "http://bicycles.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.bicycles.stackexchange.com","site_type": "meta_site"},{"site_url": "http://softwareengineering.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.softwareengineering.stackexchange.com","site_type": "meta_site"},{"site_url": "http://electronics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.electronics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://android.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.android.stackexchange.com","site_type": "meta_site"},{"site_url": "http://boardgames.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.boardgames.stackexchange.com","site_type": "meta_site"},{"site_url": "http://physics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.physics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://homebrew.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.homebrew.stackexchange.com","site_type": "meta_site"},{"site_url": "http://security.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.security.stackexchange.com","site_type": "meta_site"},{"site_url": "http://writers.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.writers.stackexchange.com","site_type": "meta_site"},{"site_url": "http://video.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.video.stackexchange.com","site_type": "meta_site"},{"site_url": "http://graphicdesign.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.graphicdesign.stackexchange.com","site_type": "meta_site"},{"site_url": "http://dba.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.dba.stackexchange.com","site_type": "meta_site"},{"site_url": "http://scifi.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.scifi.stackexchange.com","site_type": "meta_site"},{"site_url": "http://codereview.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.codereview.stackexchange.com","site_type": "meta_site"},{"site_url": "http://codegolf.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.codegolf.stackexchange.com","site_type": "meta_site"},{"site_url": "http://quant.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.quant.stackexchange.com","site_type": "meta_site"},{"site_url": "http://pm.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.pm.stackexchange.com","site_type": "meta_site"},{"site_url": "http://skeptics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.skeptics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://fitness.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.fitness.stackexchange.com","site_type": "meta_site"},{"site_url": "http://drupal.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.drupal.stackexchange.com","site_type": "meta_site"},{"site_url": "http://mechanics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.mechanics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://parenting.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.parenting.stackexchange.com","site_type": "meta_site"},{"site_url": "http://sharepoint.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.sharepoint.stackexchange.com","site_type": "meta_site"},{"site_url": "http://music.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.music.stackexchange.com","site_type": "meta_site"},{"site_url": "http://sqa.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.sqa.stackexchange.com","site_type": "meta_site"},{"site_url": "http://judaism.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.judaism.stackexchange.com","site_type": "meta_site"},{"site_url": "http://german.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.german.stackexchange.com","site_type": "meta_site"},{"site_url": "http://japanese.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.japanese.stackexchange.com","site_type": "meta_site"},{"site_url": "http://philosophy.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.philosophy.stackexchange.com","site_type": "meta_site"},{"site_url": "http://gardening.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.gardening.stackexchange.com","site_type": "meta_site"},{"site_url": "http://travel.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.travel.stackexchange.com","site_type": "meta_site"},{"site_url": "http://productivity.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.productivity.stackexchange.com","site_type": "meta_site"},{"site_url": "http://crypto.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.crypto.stackexchange.com","site_type": "meta_site"},{"site_url": "http://dsp.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.dsp.stackexchange.com","site_type": "meta_site"},{"site_url": "http://french.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.french.stackexchange.com","site_type": "meta_site"},{"site_url": "http://christianity.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.christianity.stackexchange.com","site_type": "meta_site"},{"site_url": "http://bitcoin.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.bitcoin.stackexchange.com","site_type": "meta_site"},{"site_url": "http://linguistics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.linguistics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://hermeneutics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.hermeneutics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://history.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.history.stackexchange.com","site_type": "meta_site"},{"site_url": "http://bricks.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.bricks.stackexchange.com","site_type": "meta_site"},{"site_url": "http://spanish.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.spanish.stackexchange.com","site_type": "meta_site"},{"site_url": "http://scicomp.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.scicomp.stackexchange.com","site_type": "meta_site"},{"site_url": "http://movies.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.movies.stackexchange.com","site_type": "meta_site"},{"site_url": "http://chinese.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.chinese.stackexchange.com","site_type": "meta_site"},{"site_url": "http://biology.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.biology.stackexchange.com","site_type": "meta_site"},{"site_url": "http://poker.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.poker.stackexchange.com","site_type": "meta_site"},{"site_url": "http://mathematica.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.mathematica.stackexchange.com","site_type": "meta_site"},{"site_url": "http://cogsci.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.cogsci.stackexchange.com","site_type": "meta_site"},{"site_url": "http://outdoors.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.outdoors.stackexchange.com","site_type": "meta_site"},{"site_url": "http://martialarts.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.martialarts.stackexchange.com","site_type": "meta_site"},{"site_url": "http://sports.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.sports.stackexchange.com","site_type": "meta_site"},{"site_url": "http://academia.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.academia.stackexchange.com","site_type": "meta_site"},{"site_url": "http://cs.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.cs.stackexchange.com","site_type": "meta_site"},{"site_url": "http://workplace.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.workplace.stackexchange.com","site_type": "meta_site"},{"site_url": "http://windowsphone.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.windowsphone.stackexchange.com","site_type": "meta_site"},{"site_url": "http://chemistry.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.chemistry.stackexchange.com","site_type": "meta_site"},{"site_url": "http://chess.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.chess.stackexchange.com","site_type": "meta_site"},{"site_url": "http://raspberrypi.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.raspberrypi.stackexchange.com","site_type": "meta_site"},{"site_url": "http://russian.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.russian.stackexchange.com","site_type": "meta_site"},{"site_url": "http://islam.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.islam.stackexchange.com","site_type": "meta_site"},{"site_url": "http://salesforce.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.salesforce.stackexchange.com","site_type": "meta_site"},{"site_url": "http://patents.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.patents.stackexchange.com","site_type": "meta_site"},{"site_url": "http://genealogy.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.genealogy.stackexchange.com","site_type": "meta_site"},{"site_url": "http://robotics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.robotics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://expressionengine.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.expressionengine.stackexchange.com","site_type": "meta_site"},{"site_url": "http://politics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.politics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://anime.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.anime.stackexchange.com","site_type": "meta_site"},{"site_url": "http://magento.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.magento.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ell.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.ell.stackexchange.com","site_type": "meta_site"},{"site_url": "http://sustainability.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.sustainability.stackexchange.com","site_type": "meta_site"},{"site_url": "http://tridion.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.tridion.stackexchange.com","site_type": "meta_site"},{"site_url": "http://reverseengineering.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.reverseengineering.stackexchange.com","site_type": "meta_site"},{"site_url": "http://networkengineering.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.networkengineering.stackexchange.com","site_type": "meta_site"},{"site_url": "http://opendata.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.opendata.stackexchange.com","site_type": "meta_site"},{"site_url": "http://freelancing.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.freelancing.stackexchange.com","site_type": "meta_site"},{"site_url": "http://blender.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.blender.stackexchange.com","site_type": "meta_site"},{"site_url": "http://mathoverflow.net","site_type": "main_site"},{"site_url": "http://meta.mathoverflow.net","site_type": "meta_site"},{"site_url": "http://space.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.space.stackexchange.com","site_type": "meta_site"},{"site_url": "http://sound.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.sound.stackexchange.com","site_type": "meta_site"},{"site_url": "http://astronomy.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.astronomy.stackexchange.com","site_type": "meta_site"},{"site_url": "http://tor.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.tor.stackexchange.com","site_type": "meta_site"},{"site_url": "http://pets.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.pets.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ham.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.ham.stackexchange.com","site_type": "meta_site"},{"site_url": "http://italian.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.italian.stackexchange.com","site_type": "meta_site"},{"site_url": "http://pt.stackoverflow.com","site_type": "main_site"},{"site_url": "http://meta.pt.stackoverflow.com","site_type": "meta_site"},{"site_url": "http://aviation.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.aviation.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ebooks.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.ebooks.stackexchange.com","site_type": "meta_site"},{"site_url": "http://alcohol.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.alcohol.stackexchange.com","site_type": "meta_site"},{"site_url": "http://softwarerecs.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.softwarerecs.stackexchange.com","site_type": "meta_site"},{"site_url": "http://arduino.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.arduino.stackexchange.com","site_type": "meta_site"},{"site_url": "http://cs50.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.cs50.stackexchange.com","site_type": "meta_site"},{"site_url": "http://expatriates.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.expatriates.stackexchange.com","site_type": "meta_site"},{"site_url": "http://matheducators.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.matheducators.stackexchange.com","site_type": "meta_site"},{"site_url": "http://meta.stackoverflow.com","site_type": "meta_site"},{"site_url": "http://earthscience.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.earthscience.stackexchange.com","site_type": "meta_site"},{"site_url": "http://joomla.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.joomla.stackexchange.com","site_type": "meta_site"},{"site_url": "http://datascience.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.datascience.stackexchange.com","site_type": "meta_site"},{"site_url": "http://puzzling.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.puzzling.stackexchange.com","site_type": "meta_site"},{"site_url": "http://craftcms.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.craftcms.stackexchange.com","site_type": "meta_site"},{"site_url": "http://buddhism.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.buddhism.stackexchange.com","site_type": "meta_site"},{"site_url": "http://hinduism.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.hinduism.stackexchange.com","site_type": "meta_site"},{"site_url": "http://communitybuilding.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.communitybuilding.stackexchange.com","site_type": "meta_site"},{"site_url": "http://startups.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.startups.stackexchange.com","site_type": "meta_site"},{"site_url": "http://worldbuilding.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.worldbuilding.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ja.stackoverflow.com","site_type": "main_site"},{"site_url": "http://meta.ja.stackoverflow.com","site_type": "meta_site"},{"site_url": "http://emacs.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.emacs.stackexchange.com","site_type": "meta_site"},{"site_url": "http://hsm.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.hsm.stackexchange.com","site_type": "meta_site"},{"site_url": "http://economics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.economics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://lifehacks.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.lifehacks.stackexchange.com","site_type": "meta_site"},{"site_url": "http://engineering.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.engineering.stackexchange.com","site_type": "meta_site"},{"site_url": "http://coffee.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.coffee.stackexchange.com","site_type": "meta_site"},{"site_url": "http://vi.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.vi.stackexchange.com","site_type": "meta_site"},{"site_url": "http://musicfans.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.musicfans.stackexchange.com","site_type": "meta_site"},{"site_url": "http://woodworking.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.woodworking.stackexchange.com","site_type": "meta_site"},{"site_url": "http://civicrm.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.civicrm.stackexchange.com","site_type": "meta_site"},{"site_url": "http://health.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.health.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ru.stackoverflow.com","site_type": "main_site"},{"site_url": "http://meta.ru.stackoverflow.com","site_type": "meta_site"},{"site_url": "http://rus.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.rus.stackexchange.com","site_type": "meta_site"},{"site_url": "http://mythology.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.mythology.stackexchange.com","site_type": "meta_site"},{"site_url": "http://law.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.law.stackexchange.com","site_type": "meta_site"},{"site_url": "http://opensource.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.opensource.stackexchange.com","site_type": "meta_site"},{"site_url": "http://elementaryos.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.elementaryos.stackexchange.com","site_type": "meta_site"},{"site_url": "http://portuguese.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.portuguese.stackexchange.com","site_type": "meta_site"},{"site_url": "http://computergraphics.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.computergraphics.stackexchange.com","site_type": "meta_site"},{"site_url": "http://hardwarerecs.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.hardwarerecs.stackexchange.com","site_type": "meta_site"},{"site_url": "http://es.stackoverflow.com","site_type": "main_site"},{"site_url": "http://meta.es.stackoverflow.com","site_type": "meta_site"},{"site_url": "http://3dprinting.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.3dprinting.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ethereum.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.ethereum.stackexchange.com","site_type": "meta_site"},{"site_url": "http://latin.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.latin.stackexchange.com","site_type": "meta_site"},{"site_url": "http://languagelearning.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.languagelearning.stackexchange.com","site_type": "meta_site"},{"site_url": "http://retrocomputing.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.retrocomputing.stackexchange.com","site_type": "meta_site"},{"site_url": "http://crafts.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.crafts.stackexchange.com","site_type": "meta_site"},{"site_url": "http://korean.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.korean.stackexchange.com","site_type": "meta_site"},{"site_url": "http://monero.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.monero.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ai.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.ai.stackexchange.com","site_type": "meta_site"},{"site_url": "http://esperanto.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.esperanto.stackexchange.com","site_type": "meta_site"},{"site_url": "http://sitecore.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.sitecore.stackexchange.com","site_type": "meta_site"},{"site_url": "http://iot.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.iot.stackexchange.com","site_type": "meta_site"},{"site_url": "http://literature.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.literature.stackexchange.com","site_type": "meta_site"},{"site_url": "http://vegetarianism.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.vegetarianism.stackexchange.com","site_type": "meta_site"},{"site_url": "http://ukrainian.stackexchange.com","site_type": "main_site"},{"site_url": "http://meta.ukrainian.stackexchange.com","site_type": "meta_site"}]
var allUrls = allSites.filter(function(site){
  return site.site_type !== 'meta_site'; 
})

var registerUrls = allUrls.filter(function(site){
  return !data.items.some(function(mySite){
    return mySite.site_url === site.site_url;
  });
})
.map(function(site){
  return {
    url: site.site_url + '/users/join',
    display: site.site_url
  };
});

var body = document.body,
    table  = document.createElement('table');

for(var i = 0; i < registerUrls.length; i++){
  var site = registerUrls[i];
  var tr = table.insertRow();
  var linkCell = tr.insertCell();

  var link = document.createElement('a');

  link.href = site.url;
  link.target = '_blank';

  link.innerHTML = site.display;
  linkCell.appendChild(link); 
}

body.appendChild(document.createTextNode(registerUrls.length));
body.appendChild(table);


/*

table {
  border-collapse: collapse
}

td {
  border: 1px solid black;
  border-collapse:collapse;
}

*/
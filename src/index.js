import Mirador from 'mirador/dist/es/src/index';
import miradorDownloadPlugin from 'mirador-dl-plugin/es/miradorDownloadPlugin.js';
import miradorDownloadDialogPlugin from 'mirador-dl-plugin/es/MiradorDownloadDialog.js';

var miradorInstance = Mirador.viewer({
  id: 'mirador',
  windows: [
  {
    manifestId: 'https://iiif.archivelab.org/iiif/ceremoniesreligi02pica/manifest.json',
    thumbnailNavigationPosition: 'far-bottom'
  },
  {
    manifestId: 'https://iiif.archivelab.org/iiif/gri_33125008479004/manifest.json',
    thumbnailNavigationPosition: 'far-bottom'
  }
  ],
  window: {
    panels: { // Configure which panels are visible in WindowSideBarButtons
      search: true,
    }
  },
  workspace: {
    showZoomControls: true,
  },
  catalog: [
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125012232795/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125008477628/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125012289050/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125011175565/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125008479129/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125012278640/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125012239386/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125008479053/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125008479004/manifest.json", provider: "Getty Research Institute"},
   { manifestId: "https://iiif.archivelab.org/iiif/gri_33125008479004/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/ceremoniesreligi627pica/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/ceremoniesreligi42pica/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/ceremoniesreligi61pica/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/ceremoniesreligi05pica/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/ceremoniesreligi03pica/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/ceremoniesreligi01pica/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/ceremoniesreligi02pica/manifest.json", provider: "Princeton Theological Seminary Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/cihm_48776/manifest.json", provider: "University of Alberta Libraries"},
   { manifestId: "https://iiif.archivelab.org/iiif/cihm_48778/manifest.json", provider: "University of Alberta Libraries"},
   { manifestId: "https://iiif.archivelab.org/iiif/cihm_48777/manifest.json", provider: "University of Alberta Libraries"},
   { manifestId: "https://iiif.archivelab.org/iiif/bub_gb_zf9__cLchwUC/manifest.json", provider: "National Library of Naples"},
   { manifestId: "https://iiif.archivelab.org/iiif/bub_gb_joQQwnTrB4gC/manifest.json", provider: "National Library of Naples"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll228/570/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll228/1093/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll228/1552/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll228/1992/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll228/2475/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll228/2957/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll228/3409/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll184/10171/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll184/10546/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll184/9698/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll184/9211/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll184/8688/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://cdm16022.contentdm.oclc.org/iiif/info/p16022coll184/8289/manifest.json", provider: "University of Minnesota Libraries"},
   { manifestId: "https://collections.carli.illinois.edu/iiif/info/nby_dig/15132/manifest.json", provider: "Newberry Library"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/599/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/908/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/1329/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/1714/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/2226/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/2594/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/3149/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/316/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://cdm16120.contentdm.oclc.org//iiif/info/p16120coll17/3490/manifest.json", provider: "University of St. Thomas"},
   { manifestId: "https://iiif.archivelab.org/iiif/b3045721x_0001/manifest.json", provider: "Wellcome Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/b3045721x_0002/manifest.json", provider: "Wellcome Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/b3045721x_0003/manifest.json", provider: "Wellcome Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/b3045721x_0004/manifest.json", provider: "Wellcome Library"},
   { manifestId: "https://iiif.archivelab.org/iiif/b3045721x_0005/manifest.json", provider: "Wellcome Library"},
   { manifestId: "https://digi.ub.uni-heidelberg.de/diglit/iiif/herrliberger1758/manifest.json", provider: "Heidelberg University"},
   { manifestId: "https://www.loc.gov/item/50032372/manifest.json", provider: "Library of Congress"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pff1/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfgj/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfh2/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfjk/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfk3/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfmm/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfn4/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfn4/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfpn/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0009pfq5/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001hg0k0/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001hgmzc/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001hh48q/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001hhsg0/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001hjhk4/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001hk1x0/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002hb38/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002hb0q/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002hb59/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002hb4s/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002hb2r/manifest", provider: "UCLA"},
   { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002hb17/manifest", provider: "UCLA"}
  ]
}, [
  miradorDownloadPlugin,
  miradorDownloadDialogPlugin,
]);

const generatePDF = (poste, age, niveauEtude, secteurActivité, tailleEntreprise, outilsNecessaires, defis, indicateurPerformance, superieurHierarchique, objectifPersona, informationsPersonnelles) => {
  
    const renderOutilsNecessaires = () => {
      if (outilsNecessaires?.length > 0) {
        return outilsNecessaires.map((outil, index) => (
          <Text
            key={index}
            className="text-base text-indigo-600_77 w-[300px]"
            size="txtLibreBaskervilleRegular16Indigo60077"
          >
            {outil}
          </Text>
        ));
      } else {
        return (
          <Text
            className="text-base text-indigo-600_77 w-[300px]"
            size="txtLibreBaskervilleRegular16Indigo60077"
          >
            Tu dois côcher
          </Text>
        );
      }
    };
    
    const renderDefis = () => {
      if (defis?.length > 0) {
        return defis.map((defi, index) => (
          <Text
            key={index}
            className="text-base text-indigo-600_77 w-[300px]"
            size="txtLibreBaskervilleRegular16Indigo60077"
          >
            {defi}
          </Text>
        ));
      } else {
        return (
          <Text
            className="text-base text-indigo-600_77 w-[300px]"
            size="txtLibreBaskervilleRegular16Indigo60077"
          >
            Tu dois côcher
          </Text>
        );
      }
    };
    
    
    const content = `
      <html lang="en">
  
      <head>
        <meta charset="utf-8">
  
        <title>Html Generated</title>
        <link rel="stylesheet" href="styles.css">
  
        <style>
          body {
            background: #E5E5E5;
          }
        </style>
  
      </head>
  
      <body>
        <div class=e1_12>
          <div class=e2_81>
            <div class=e2_14>
              <div class=e2_15>
                <div class="e2_16">
  
                </div>
                <div class="e2_17">
  
                </div>
                <div class="e2_18">
  
                </div>
                <div class="e2_19">
  
                </div>
                <div class="e2_20">
  
                </div>
                <div class=e2_28>
                  <div class=e2_26>
                    <div class=e2_21>
                      <div class="e2_22">
  
                      </div>
                      <div class="e2_23">
  
                      </div>
                      <div class="e2_24">
  
                      </div>
                      <div class="e2_25">
  
                      </div>
                    </div>
                  </div>
                </div>
                <div class="e2_29">
  
                </div>
                <div class="e2_30">
  
                </div>
                <div class="e2_31">
  
                </div>
                <div class="e2_32">
  
                </div>
                <div class="e2_33">
  
                </div>
                <div class="e2_34">
  
                </div>
                <div class="e2_35">
  
                </div>
                <div class="e2_36">
  
                </div>
                <div class="e2_37">
  
                </div>
                <div class="e2_38">
  
                </div>
                <div class="e2_39">
  
                </div>
                <div class="e2_40">
  
                </div>
                <div class="e2_41">
  
                </div>
                <div class="e2_42">
  
                </div>
                <div class="e2_43">
  
                </div>
                <div class="e2_44">
  
                </div>
                <div class="e2_45">
  
                </div>
                <div class="e2_46">
  
                </div>
                <div class="e2_47">
  
                </div>
                <div class="e2_48">
  
                </div>
                <div class="e2_49">
  
                </div>
                <div class="e2_50">
  
                </div>
                <div class="e2_51">
  
                </div>
                <div class="e2_52">
  
                </div>
                <div class="e2_53">
  
                </div>
                <div class="e2_54">
  
                </div>
                <div class="e2_55">
  
                </div>
                <div class="e2_56">
  
                </div>
                <div class="e2_57">
  
                </div>
                <div class="e2_58">
  
                </div>
                <div class="e2_59">
  
                </div>
                <div class="e2_60">
  
                </div>
                <div class="e2_61">
  
                </div>
                <div class="e2_62">
  
                </div>
                <div class="e2_63">
  
                </div>
                <div class="e2_64">
  
                </div>
                <div class="e2_65">
  
                </div>
                <div class="e2_66">
  
                </div>
                <div class="e2_67">
  
                </div>
                <div class="e2_68">
  
                </div>
                <div class="e2_69">
  
                </div>
                <div class="e2_70">
  
                </div>
                <div class="e2_71">
  
                </div>
                <div class="e2_72">
  
                </div>
                <div class="e2_73">
  
                </div>
                <div class="e2_74">
  
                </div>
                <div class="e2_75">
  
                </div>
                <div class="e2_76">
  
                </div>
                <div class="e2_77">
  
                </div>
                <div class="e2_78">
  
                </div>
              </div>
            </div>
            <div class="e2_13">
            </div>
            <span class="e2_82">Intitulé de poste</span>
            <span class="e2_83">${poste ? poste : "Saisissez un texte"}</span>
            <span class="e2_84">Àge</span>
            <span class="e2_85">${age ? age : "Saisissez un texte"}</span>
            <span class="e2_86">Niveau d’études</span>
            <span class="e2_87">${niveauEtude ? niveauEtude : "Saisissez un texte"}</span>
            <span class="e2_88">Réseaux sociaux</span>
            <div class=e2_128>
              <div class=e2_91>
                <div class="e2_92">
                </div>
                <div class=e2_93>
                  <div class="e2_94">
                  </div>
                </div>
              </div>
              <div class=e2_95>
                <div class=e2_96>
                  <div class="e2_97">
                  </div>
                  <div class="e2_98">
                  </div>
                  <div class="e2_99">
  
                  </div>
                  <div class="e2_100">
  
                  </div>
                  <div class="e2_101">
  
                  </div>
                  <div class="e2_102">
  
                  </div>
                  <div class="e2_103">
  
                  </div>
                  <div class="e2_104">
  
                  </div>
                  <div class="e2_105">
  
                  </div>
                  <div class="e2_106">
  
                  </div>
                  <div class="e2_107">
  
                  </div>
                  <div class="e2_108">
  
                  </div>
                  <div class="e2_109">
  
                  </div>
                  <div class="e2_110">
  
                  </div>
                  <div class="e2_111">
  
                  </div>
                  <div class="e2_112"></div>
                </div>
                <div class=e2_113>
                  <div class="e2_114"></div>
                  <div class="e2_115"></div>
                </div>
                <div class=e2_116>
                  <div class="e2_117"></div>
                </div>
              </div>
              <div class=e2_118>
                <div class="e2_119"></div>
                <div class=e2_120>
                  <div class="e2_121"></div>
                  <div class="e2_122"></div>
                </div>
                <div class="e2_123"></div>
                <div class="e2_124"></div>
              </div>
              <div class=e2_125>
                <div class="e2_126"></div>
              </div>
            </div><span class="e2_129">Secteur d’activité</span>
            <span class="e2_130">${secteurActivité ? secteurActivité : "Saisissez un texte"}</span>
            <span class="e2_131">Taille de l’entreprise</span>
            <span class="e2_132">${tailleEntreprise ? tailleEntreprise : "Saisissez un texte"}</span>
          </div>
          <div class=e2_154>
            <div class=e2_135><span class="e2_133">Moyen de communication préféré</span>
              <span class="e2_134">Saisissez untexte</span>
            </div>
            <div class=e2_136><span class="e2_137">Outils nécessaires au quotidien</span>
              <span class="e2_138">
              ${renderOutilsNecessaires()}
              </span>
            </div>
            <div class=e2_139>
              <span class="e2_140">Pricipaux défis</span>
              <span class="e2_141">
              ${renderDefis()}
              </span>
            </div>
            <div class=e2_142>
              <span class="e2_143">Indicateurs de performances</span>
              <span class="e2_144">${indicateurPerformance ? indicateurPerformance : "Saisissez un texte"}</span>
            </div>
            <div class=e2_145><span class="e2_146">Superieur hiérarchique</span>
              <span class="e2_147">${superieurHierarchique ? superieurHierarchique : "Saisissez un texte"}</span>
            </div>
            <div class=e2_148><span class="e2_149">Objectifs</span>
              <span class="e2_150">${objectifPersona ? objectifPersona : "Saisissez un texte"}</span>
            </div>
            <div class=e2_151><span class="e2_152">Sources d’informations</span>
              <span class="e2_153">${informationsPersonnelles ? informationsPersonnelles : "Saisissez un texte"}</span>
            </div>
          </div><span class="e2_155">My Persona</span>
        </div>
      </body>
  
      </html>
      `;
  
    const element = document.createElement('div');
    element.innerHTML = content;
  
    html2pdf()
      .from(element)
      .save('generated.pdf');
  };
  
  
  
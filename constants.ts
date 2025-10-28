
import type { Question, Topic } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    question: "Plasmodium falciparum is the causative agent of:",
    options: [
      "Malignant tertian malaria (48 hour cycles of fever)",
      "Benign tertian malaria",
      "Quartan malaria (72 hour cycles of fever)",
      "Relapsing malaria"
    ],
    correctAnswerIndex: 0,
    explanation: "P. falciparum causes malignant tertian malaria, the most severe form, with a 48-hour fever cycle. The term 'malignant' highlights its potential for severe, life-threatening complications like cerebral malaria, severe anemia, and organ failure due to high parasitemia and cytoadherence of infected red blood cells in capillaries. P. vivax causes benign tertian malaria, P. malariae causes quartan malaria, and P. ovale/vivax are known for causing relapses."
  },
  {
    question: "Plasmodium vivax is well known for causing:",
    options: [
      "Malignant tertian malaria",
      "Benign tertian malaria with potential for relapses",
      "Quartan malaria with risk of nephrotic syndrome",
      "The most severe form of malaria"
    ],
    correctAnswerIndex: 1,
    explanation: "P. vivax causes benign tertian malaria, which has a 48-hour fever cycle but is less severe than P. falciparum. Its defining characteristic is the formation of dormant liver stages called 'hypnozoites,' which can reactivate weeks or months later, causing relapses of the disease even after the blood-stage infection has been cleared."
  },
  {
    question: "Plasmodium malariae is the causative agent of:",
    options: [
      "Quartan malaria (72 hour cycles of fever)",
      "Malignant tertian malaria (48 hour cycles of fever)",
      "Benign tertian malaria (48 hour cycles of fever)",
      "West Africa tertian malaria"
    ],
    correctAnswerIndex: 0,
    explanation: "P. malariae is unique for causing quartan malaria, characterized by a 72-hour cycle between fever episodes due to its slower erythrocytic schizogony. Chronic, persistent, low-level infections can sometimes lead to immune-complex deposition in the kidneys, causing nephrotic syndrome."
  },
  {
    question: "Toxoplasma gondii is a protozoal sporozoa parasite which has a sexual life cycle in:",
    options: [
      "Humans (intermediate host)",
      "Birds (intermediate host)",
      "The cat (definitive host)",
      "Pigs (intermediate host)"
    ],
    correctAnswerIndex: 2,
    explanation: "Toxoplasma gondii is a coccidian parasite whose sexual life cycle occurs exclusively in the intestinal epithelium of felines (cats), which are the definitive hosts. Cats shed infectious oocysts in their faeces. Humans, birds, and pigs are all intermediate hosts where only the asexual cycle (tachyzoites and bradyzoites) occurs."
  },
  {
    question: "In Toxoplasma gondii, the infective stage for humans acquired from undercooked meat is:",
    options: [
      "The oocyst",
      "The tachyzoite",
      "The bradyzoite (in tissue cysts)",
      "The sporozoite"
    ],
    correctAnswerIndex: 2,
    explanation: "Humans can be infected in two primary ways: 1) by ingesting oocysts from sources contaminated with cat faeces, or 2) by eating undercooked meat containing tissue cysts. These tissue cysts contain the slow-replicating bradyzoites, which are the infective stage in this context. Tachyzoites are the rapidly-multiplying form seen in acute infection but are not the typical infective stage from food."
  },
  {
    question: "Leishmania is a protozoal haemoflagellate parasite which is transported to human by the bite of:",
    options: [
      "Tsetse fly",
      "Reduviid ('kissing') bug",
      "Sand fly",
      "Anopheles mosquito"
    ],
    correctAnswerIndex: 2,
    explanation: "Leishmania species are transmitted by the bites of infected female phlebotomine sandflies. The Tsetse fly transmits African Trypanosomiasis, the reduviid bug transmits Chagas' disease, and the Anopheles mosquito transmits malaria."
  },
  {
    question: "In the Leishmania species life cycle, the infective stage injected into a human is:",
    options: [
      "The amastigote",
      "The promastigote",
      "The trypomastigote",
      "The hypnozoite"
    ],
    correctAnswerIndex: 1,
    explanation: "The promastigote is the motile, flagellated form that develops in the sandfly's gut. This is the infective stage that is injected into the human host during a blood meal. Once inside the human, it is phagocytosed by macrophages and transforms into the non-motile, replicating amastigote form."
  },
  {
    question: "Leishmania donovani is the causative agent of:",
    options: [
      "Kala-azar (visceral leishmaniasis)",
      "Oriental sore (cutaneous leishmaniasis)",
      "Mucocutaneous leishmaniasis",
      "Chagas' disease"
    ],
    correctAnswerIndex: 0,
    explanation: "The L. donovani complex causes visceral leishmaniasis, also known as kala-azar. This is a severe systemic disease characterized by prolonged fever, weight loss, and massive hepatosplenomegaly. L. tropica causes cutaneous leishmaniasis, and L. braziliensis causes mucocutaneous leishmaniasis."
  },
  {
    question: "Leishmania tropica is the causative agent of:",
    options: [
      "Kala-azar (visceral leishmaniasis)",
      "Oriental sore (cutaneous leishmaniasis)",
      "Sleeping Sickness",
      "Post-kala-azar dermal leishmaniasis"
    ],
    correctAnswerIndex: 1,
    explanation: "The L. tropica complex causes Old World cutaneous leishmaniasis, a localized skin infection often called 'oriental sore'. It typically presents as a chronic, ulcerating papule at the site of the sandfly bite, which heals over time leaving a scar."
  },
  {
    question: "Trypanosoma brucei is the causative agent of:",
    options: [
      "Acute Chagas' disease",
      "Chronic Chagas' disease",
      "Human African Trypanosomiasis (Sleeping Sickness)",
      "Kala-azar"
    ],
    correctAnswerIndex: 2,
    explanation: "T. brucei is transmitted by the tsetse fly and causes sleeping sickness. The parasite initially multiplies in the blood and lymph (haemolymphatic stage) before invading the central nervous system (neurological stage), leading to the characteristic sleep disturbances, neurological decline, and ultimately death if untreated. Chagas' disease is caused by T. cruzi."
  },
  {
    question: "Trypanosoma cruzi is the causative agent of:",
    options: [
      "Chagas' disease (both acute and chronic forms)",
      "Sleeping Sickness only",
      "Visceral leishmaniasis only",
      "None of the above"
    ],
    correctAnswerIndex: 0,
    explanation: "T. cruzi causes Chagas' disease, which has two phases. The acute phase can be mild or asymptomatic. The chronic phase develops years later in a subset of patients and is characterized by severe and life-threatening damage to the heart (cardiomyopathy) and digestive system (megacolon, megaesophagus)."
  },
  {
    question: "Rickettsiae are small aerobic bacteria which are obligate intracellular parasites primarily because they lack:",
    options: [
      "A cell wall with inner and outer membranes",
      "RNA and DNA",
      "Peptidoglycan in the cell wall",
      "Enzymes for independent energy metabolism"
    ],
    correctAnswerIndex: 3,
    explanation: "Unlike most bacteria, Rickettsiae are 'energy parasites.' They possess a cell wall, genetic material (DNA/RNA), and peptidoglycan, but they lack the key metabolic pathways to generate their own ATP. This makes them completely dependent on the host cell's energy supply, forcing them into an obligate intracellular lifestyle."
  },
  {
    question: "Rickettsia prowazekii, transmitted by the human body louse, is the causative agent of:",
    options: [
      "Epidemic typhus",
      "Endemic (murine) typhus",
      "Scrub typhus",
      "Rocky Mountain Spotted Fever"
    ],
    correctAnswerIndex: 0,
    explanation: "R. prowazekii causes epidemic typhus. It is termed 'epidemic' because its vector, the human body louse, thrives in crowded, unhygienic conditions (e.g., during war and famine), leading to rapid, large-scale outbreaks. Humans are the main reservoir. Endemic typhus is caused by R. typhi and is transmitted by rat fleas."
  },
  {
    question: "Rickettsia typhi, transmitted by the rat flea, is the causative agent of:",
    options: [
      "Epidemic typhus",
      "Endemic (murine) typhus",
      "Q fever",
      "Trench fever"
    ],
    correctAnswerIndex: 1,
    explanation: "R. typhi causes endemic (or murine) typhus. It is 'endemic' as it is maintained in a natural animal reservoir (rats) and transmitted sporadically to humans by the rat flea. It does not typically cause large epidemics like louse-borne typhus."
  },
  {
    question: "Coxiella burnetii, typically transmitted by inhalation of aerosols from infected farm animals, causes:",
    options: [
      "Scrub typhus",
      "Spotted fever",
      "Q fever",
      "Typhoid fever"
    ],
    correctAnswerIndex: 2,
    explanation: "C. burnetii is the agent of Q fever. It is unique among this group as it forms a resilient, spore-like small-cell variant that survives well in the environment. Its primary transmission route is not an arthropod bite but the inhalation of contaminated aerosols from infected animals (cattle, sheep, goats) or their birth products. It often presents as an atypical pneumonia."
  },
  {
    question: "The primary pathogenic mechanism of most Rickettsial diseases involves damage to which host cells?",
    options: [
      "Hepatocytes (liver cells)",
      "Alveolar macrophages",
      "Vascular endothelial cells",
      "Neurons"
    ],
    correctAnswerIndex: 2,
    explanation: "The hallmark of rickettsial pathogenesis is the invasion and replication within vascular endothelial cells, which line the small blood vessels. This leads to vasculitis (inflammation of blood vessels), increased vascular permeability, edema, and hemorrhage, accounting for the characteristic rash and multi-organ damage."
  },
  {
    question: "Which of the following is a key virulence factor used by Rickettsia to escape from the host cell's phagosome into the cytoplasm?",
    options: [
      "Lipopolysaccharide (LPS)",
      "Phospholipase A",
      "Catalase",
      "Coagulase"
    ],
    correctAnswerIndex: 1,
    explanation: "Phospholipase A is a critical virulence factor for Rickettsia. After being engulfed by a host cell into a phagosome, the bacteria use this enzyme to degrade the phagosomal membrane, allowing them to escape into the nutrient-rich cytoplasm where they can freely replicate. LPS is an endotoxin that causes inflammation but does not facilitate escape."
  },
  {
    question: "Which of the following infections is a recognized cause of classical Pyrexia of Unknown Origin (PUO)?",
    options: [
      "Tuberculosis (especially extrapulmonary)",
      "Intra-abdominal abscess",
      "Brucellosis",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "Classical PUO has a very broad differential diagnosis, with infections being a leading cause. All the options listed are classic infectious causes: extrapulmonary or miliary Tuberculosis, deep-seated occult abscesses (e.g., in the liver or abdomen), and systemic zoonotic infections like Brucellosis can all present with prolonged fever that is difficult to diagnose."
  },
  {
    question: "Acute pyrexia of unknown origin is caused by the following infections:",
    options: [
      "Brucellosis",
      "Tuberculosis",
      "Psittacosis",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "The list of infectious causes for PUO is extensive and includes zoonotic diseases like Brucellosis (from livestock) and Psittacosis (from birds), as well as chronic infections like Tuberculosis which can present with non-specific systemic symptoms. Because many different infections can present this way, 'All of the above' is correct."
  },
  {
    question: "Acute pyrexia of unknown origin is classically defined as:",
    options: [
      "A fever for 1 week without a known cause",
      "A fever for 2 weeks without a known cause",
      "A fever >38.3°C for at least 3 weeks with no cause found after 1 week of investigation",
      "Any fever in a hospitalized patient"
    ],
    correctAnswerIndex: 2,
    explanation: "The classic 1961 Petersdorf and Beeson criteria for PUO define it as: 1) A temperature greater than 38.3°C (101°F) on several occasions, 2) a duration of fever for at least three weeks, and 3) the failure to establish a diagnosis after one week of inpatient investigation. This strict definition helps to exclude short-lived viral illnesses."
  },
  {
    question: "The most common causes of septicemia from a focal source in the skin include:",
    options: [
      "Staphylococcus aureus and Streptococcus pyogenes",
      "Haemophilus influenzae",
      "Neisseria meningitidis",
      "Listeria monocytogenes"
    ],
    correctAnswerIndex: 0,
    explanation: "The skin is a primary barrier, and breaches can lead to septicaemia. The most common causative organisms are part of the skin flora or are common skin pathogens. Staphylococcus aureus (from abscesses, boils, cellulitis) and Streptococcus pyogenes (from erysipelas, cellulitis) are the leading causes. H. influenzae and N. meningitidis are more associated with respiratory and CNS sources, respectively."
  },
  {
    question: "The most common causes of septicemia from a focal source in the heart (infective endocarditis) are:",
    options: [
      "Streptococci and Staphylococci",
      "Gram-negative rods",
      "Anaerobes",
      "Fungi"
    ],
    correctAnswerIndex: 0,
    explanation: "Septicemia originating from infective endocarditis is most frequently caused by Gram-positive cocci. Key culprits include various species of Streptococci (especially viridans streptococci, which colonize the oral cavity and can enter the bloodstream after dental procedures) and Staphylococci (especially S. aureus, which causes a more acute and destructive endocarditis)."
  }
];

export const LEARNING_TOPICS: Topic[] = [
  {
    id: 'plasmodium',
    title: 'Plasmodium',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Plasmodia (Malaria)</h3>
      <p class="mb-4">Plasmodia are sporozoan parasites transmitted by female Anopheles mosquitoes that cause malaria, a major global health problem.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Key Species and Clinical Features:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">P. falciparum:</strong> Causes malignant tertian malaria (48-hour fever cycle). This is the most severe form, responsible for most malaria deaths. High parasitemia levels can lead to microvascular obstruction and severe complications like cerebral malaria, acute respiratory distress syndrome (ARDS), and renal failure.</li>
        <li><strong class="text-slate-800">P. vivax:</strong> Causes benign tertian malaria (48-hour fever cycle). While less severe than falciparum, it is notable for forming dormant liver-stage parasites called <strong class="text-slate-800">hypnozoites</strong>, which can cause relapsing infections weeks to months after the initial illness.</li>
        <li><strong class="text-slate-800">P. malariae:</strong> Causes quartan malaria (72-hour fever cycle). It can persist for years as a low-level, chronic infection and may lead to immune-complex mediated kidney damage (nephrotic syndrome).</li>
        <li><strong class="text-slate-800">P. ovale:</strong> A cause of tertian malaria, similar to P. vivax (including hypnozoite formation), primarily found in West Africa.</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Life Cycle & Pathogenesis:</h4>
      <p class="mb-2">The complex life cycle involves asexual reproduction in humans (intermediate host) and sexual reproduction in mosquitoes (definitive host).</p>
      <ol class="list-decimal pl-5 space-y-2 mb-4">
        <li><strong>Inoculation:</strong> A mosquito injects sporozoites into the human host during a blood meal.</li>
        <li><strong>Liver Stage (Exo-erythrocytic):</strong> Sporozoites travel to the liver, invade hepatocytes, and mature into schizonts, which rupture to release thousands of merozoites. This stage is asymptomatic.</li>
        <li><strong>Blood Stage (Erythrocytic):</strong> Merozoites invade red blood cells (RBCs), where they multiply asexually. The periodic, synchronous rupture of infected RBCs releases more merozoites and parasite toxins, causing the classic clinical symptoms of malaria: cyclical fever, chills, and sweats. This RBC destruction also leads to anemia.</li>
        <li><strong>Gametogenesis:</strong> Some parasites develop into male and female gametocytes. These are ingested by a mosquito, where they fuse to begin the sexual cycle, producing new sporozoites.</li>
      </ol>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Diagnosis:</h4>
      <p>The gold standard for diagnosis is the microscopic examination of a Giemsa-stained thick and thin blood smear. This allows for the identification of the parasite species and quantification of parasite density. Rapid diagnostic tests (RDTs) detecting parasite antigens are also widely used.</p>
    `
  },
  {
    id: 'toxoplasma',
    title: 'Toxoplasma',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Toxoplasma gondii</h3>
      <p class="mb-4">T. gondii is a ubiquitous coccidian parasite. Its definitive host is the cat, where the sexual cycle occurs, but it can infect virtually all warm-blooded animals, including humans, as intermediate hosts.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Life Cycle & Transmission:</h4>
      <p class="mb-2">Infection in humans occurs through three main routes:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Foodborne:</strong> Eating undercooked or raw meat containing dormant tissue cysts (<strong class="text-slate-800">bradyzoites</strong>). This is a common route of infection.</li>
        <li><strong>Zoonotic (from cats):</strong> Ingesting infectious <strong class="text-slate-800">oocytes</strong> from food, water, or soil contaminated with cat faeces.</li>
        <li><strong>Congenital:</strong> A mother who acquires a primary infection during pregnancy can transmit the parasite to the fetus transplacentally.</li>
      </ul>
      <p>Once ingested, the parasite differentiates into <strong class="text-slate-800">tachyzoites</strong>, the rapidly multiplying form responsible for tissue damage in acute infection. The immune system eventually controls this proliferation, leading to the formation of dormant <strong class="text-slate-800">bradyzoite</strong> cysts in tissues like the brain, muscle, and eyes, which can persist for the life of the host.</p>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Clinical Syndromes:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Immunocompetent Persons:</strong> Most infections are asymptomatic. A minority develop a mild, self-limiting mononucleosis-like syndrome with fever and lymphadenopathy.</li>
        <li><strong>Congenital Toxoplasmosis:</strong> Can have devastating consequences for the fetus, including the classic triad of chorioretinitis (eye inflammation), hydrocephalus (fluid in the brain), and intracranial calcifications.</li>
        <li><strong>Immunocompromised Hosts (e.g., AIDS patients):</strong> Reactivation of latent cysts is a major concern, often leading to life-threatening toxoplasmic encephalitis, which presents with headache, fever, focal neurological deficits, and seizures.</li>
      </ul>
    `
  },
  {
    id: 'leishmania',
    title: 'Leishmania',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Leishmania</h3>
      <p class="mb-4">Leishmania are protozoal haemoflagellates transmitted by the bite of phlebotomine <strong class="text-slate-800">sandflies</strong>. They are obligate intracellular parasites that replicate within host macrophages.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Life Cycle & Pathogenesis:</h4>
      <p class="mb-2">The parasite exists in two main forms:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Promastigote:</strong> The motile, flagellated, infective stage that is injected by the sandfly into the human host.</li>
        <li><strong class="text-slate-800">Amastigote:</strong> The non-motile, ovoid, replicating form that resides within the phagolysosomes of macrophages in the mammalian host.</li>
      </ul>
      <p>The clinical manifestation of the disease depends on the Leishmania species and the host's immune response. Pathogenesis is driven by the destruction of infected macrophages and the resulting inflammatory response.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Major Clinical Syndromes:</h4>
       <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Visceral Leishmaniasis (Kala-azar):</strong> Caused by the <strong class="text-slate-800">L. donovani</strong> complex. This is a severe, systemic disease where parasites disseminate to visceral organs. It is characterized by chronic fever, weight loss, massive hepatosplenomegaly, and pancytopenia (anemia, leukopenia, thrombocytopenia). It is fatal if untreated. Diagnosis involves finding amastigotes in bone marrow or splenic aspirates.</li>
        <li><strong class="text-slate-800">Cutaneous Leishmaniasis:</strong> Caused by species like <strong class="text-slate-800">L. tropica</strong> or <strong class="text-slate-800">L. major</strong>. This form is localized to the skin, producing chronic papules that evolve into ulcers ("oriental sore"). These typically heal over months to years, leaving a permanent scar. Diagnosis is by identifying amastigotes in a skin biopsy or smear.</li>
        <li><strong class="text-slate-800">Mucocutaneous Leishmaniasis:</strong> Caused by <strong class="text-slate-800">L. braziliensis</strong>, this form involves metastatic spread of parasites from a skin lesion to the naso-oropharyngeal mucosa, causing destructive and disfiguring lesions.</li>
      </ul>
    `
  },
    {
    id: 'trypanosoma',
    title: 'Trypanosoma',
    category: 'Parasitology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Trypanosoma</h3>
      <p class="mb-4">Trypanosomes are haemoflagellates transmitted by insect vectors, causing two major diseases: African Sleeping Sickness and American Chagas' Disease.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Trypanosoma brucei (African Sleeping Sickness)</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Transmission & Pathogenesis:</strong> Transmitted by the tsetse fly. The parasite is extracellular, living in the blood, lymph, and eventually the central nervous system (CNS). It evades the immune system through antigenic variation of its surface glycoproteins.</li>
        <li><strong>Stage 1 (Haemolymphatic):</strong> The early stage is characterized by intermittent fever, headaches, and lymphadenopathy. Swelling of the posterior cervical lymph nodes (Winterbottom's sign) is characteristic.</li>
        <li><strong>Stage 2 (Neurological):</strong> The late stage begins when the parasite crosses the blood-brain barrier, causing meningoencephalitis. This leads to profound personality changes, confusion, daytime somnolence and nighttime insomnia (hence 'sleeping sickness'), and eventually coma and death.</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Trypanosoma cruzi (Chagas' Disease)</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Transmission & Pathogenesis:</strong> Transmitted by reduviid ('kissing') bugs, which defecate on the skin after a blood meal. The parasites enter through the bite wound or mucous membranes. T. cruzi is an intracellular parasite, forming nests of amastigotes, particularly in muscle and nerve cells.</li>
        <li><strong>Acute Phase:</strong> Often asymptomatic, especially in adults. When symptoms occur, they may include fever, malaise, and swelling at the site of inoculation (a chagoma) or unilateral periorbital edema (Romaña's sign).</li>
        <li><strong>Chronic Phase:</strong> Develops in 20-30% of infected individuals after a long latent period. The persistent parasitic infection and associated immune response lead to severe organ damage, most notably Chagasic cardiomyopathy (arrhythmias, heart failure) and gastrointestinal disease like megaesophagus and megacolon.</li>
      </ul>
    `
  },
  {
    id: 'rickettsiae',
    title: 'Rickettsiae',
    category: 'Bacteriology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Rickettsiae</h3>
      <p class="mb-4">Rickettsiae are small, Gram-negative bacteria that are obligate intracellular parasites, typically transmitted by arthropod vectors like lice, fleas, and ticks.</p>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Pathogenesis: The Vasculitis Model</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Target Cell:</strong> The primary target for most rickettsiae is the <strong class="text-slate-800">vascular endothelial cell</strong> that lines small blood vessels.</li>
        <li><strong>Mechanism:</strong> After entering the cell, they use <strong class="text-slate-800">Phospholipase A</strong> to escape the phagosome and replicate freely in the cytoplasm. Their proliferation damages the endothelial cells, leading to widespread <strong class="text-slate-800">vasculitis</strong>.</li>
        <li><strong>Consequences:</strong> This inflammation and damage increase vascular permeability, causing leakage of fluid into tissues (edema), loss of blood volume (hypovolemia), and extravasation of blood cells (petechial rash, hemorrhage). This is the underlying pathology for the clinical manifestations of most rickettsial diseases.</li>
      </ul>
      
      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Key Diseases and Epidemiology:</h4>
       <ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-slate-800">Epidemic Typhus (R. prowazekii):</strong> Transmitted by the human body louse. The reservoir is humans. Historically associated with massive epidemics in times of war and famine due to crowded, unhygienic conditions. Presents with high fever, headache, and a rash that starts on the trunk and spreads outwards.</li>
        <li><strong class="text-slate-800">Endemic (Murine) Typhus (R. typhi):</strong> Transmitted by the rat flea. The reservoir is rodents. It is clinically similar to epidemic typhus but generally milder.</li>
        <li><strong class="text-slate-800">Rocky Mountain Spotted Fever (R. rickettsii):</strong> Transmitted by ticks. A severe disease characterized by fever, headache, and a rash that characteristically begins on the wrists and ankles and spreads centrally.</li>
        <li><strong class="text-slate-800">Q Fever (Coxiella burnetii):</strong> A unique rickettsial disease. Transmitted primarily by <strong class="text-slate-800">inhalation of aerosols</strong> from infected farm animals (cattle, sheep, goats). It forms a highly resistant spore-like variant. It does not typically cause a rash and often presents as an atypical pneumonia with fever and hepatitis.</li>
      </ul>
    `
  },
    {
    id: 'clinical_infections',
    title: 'Clinical Infections',
    category: 'Bacteriology',
    content: `
      <h3 class="text-xl font-bold mb-2 text-sky-700">Bacteraemia, Septicaemia, and Sepsis</h3>
      <p class="mb-4">These terms describe a spectrum of severity related to bloodstream infections.</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Bacteraemia:</strong> The simple presence of viable bacteria in the blood, confirmed by a positive blood culture. It can be transient and asymptomatic.</li>
        <li><strong class="text-slate-800">Septicaemia:</strong> A clinical term meaning bacteraemia that is causing a systemic illness, with symptoms like fever, chills, and tachycardia.</li>
        <li><strong class="text-slate-800">Sepsis:</strong> A modern, more precise definition. It is a life-threatening <strong class="text-slate-800">organ dysfunction</strong> caused by a dysregulated host immune response to infection. It is a medical emergency.</li>
        <li><strong class="text-slate-800">Septic Shock:</strong> A subset of sepsis with profound circulatory, cellular, and metabolic abnormalities, characterized by persistent hypotension requiring vasopressors to maintain blood pressure, and elevated lactate levels. It has a very high mortality rate.</li>
      </ul>

      <h4 class="font-semibold mb-2 mt-4 text-slate-600">Common Focal Sources of Septicaemia:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong class="text-slate-800">Skin:</strong> Abscesses, cellulitis, infected wounds, or intravascular devices. Common organisms: <strong class="text-slate-800">S. aureus</strong>, <strong class="text-slate-800">S. epidermidis</strong>, <strong class="text-slate-800">S. pyogenes</strong>.</li>
        <li><strong class="text-slate-800">Heart (Infective Endocarditis):</strong> Infection of the heart valves. Common organisms: <strong class="text-slate-800">Streptococci</strong> (especially viridans group), <strong class="text-slate-800">Staphylococci</strong>.</li>
        <li><strong class="text-slate-800">Lungs (Pneumonia):</strong> Common organisms: <strong class="text-slate-800">S. pneumoniae</strong>, <strong class="text-slate-800">H. influenzae</strong>.</li>
        <li><strong class="text-slate-800">Abdomen:</strong> Peritonitis, abscesses, biliary tract infections. Common organisms: Aerobic Gram-negative rods (e.g., E. coli), anaerobes.</li>
        <li><strong class="text-slate-800">Urinary Tract (Urosepsis):</strong> Common organisms: Gram-negative rods (e.g., E. coli).</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-2 text-sky-700">Pyrexia of Unknown Origin (PUO)</h3>
      <p class="mb-4">PUO refers to a prolonged febrile illness without an established etiology despite intensive evaluation and diagnostic testing.</p>
      
       <h4 class="font-semibold mb-2 mt-4 text-slate-600">Classical PUO: Definition & Causes</h4>
      <p class="mb-4">The classic definition is a fever >38.3°C (101°F) lasting for at least <strong class="text-slate-800">3 weeks</strong> with no cause found after one week of inpatient investigation. The major categories of causes are:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-slate-800">Infections (~30-40%):</strong> Often atypical presentations of common diseases. Key examples include systemic infections like extrapulmonary/miliary <strong class="text-slate-800">Tuberculosis</strong>, <strong class="text-slate-800">Brucellosis</strong>, and infective endocarditis, as well as localized occult abscesses (e.g., intra-abdominal, splenic).</li>
        <li><strong class="text-slate-800">Malignancies (~20-30%):</strong> Fever can be a primary manifestation of cancer, especially hematologic malignancies like <strong class="text-slate-800">lymphoma</strong> and <strong class="text-slate-800">leukemia</strong>, and solid tumors like renal cell carcinoma.</li>
        <li><strong class="text-slate-800">Non-infectious Inflammatory Diseases (~10-20%):</strong> Includes connective tissue diseases and vasculitides, such as Adult-onset Still's disease, systemic lupus erythematosus (SLE), and polyarteritis nodosa.</li>
        <li><strong class="text-slate-800">Miscellaneous & Undiagnosed:</strong> This category includes drug fever, factitious fever, and a significant portion (up to 20%) where no diagnosis is ever made.</li>
      </ul>
    `
  }
];

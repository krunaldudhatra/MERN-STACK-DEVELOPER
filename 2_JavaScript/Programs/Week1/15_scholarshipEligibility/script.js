function isEligible(mathScore , englishScore , scienceScore) {
  let eligibleForAward=true;
  let sciencefair =( (mathScore + englishScore + scienceScore)>250 )
    let scholarship=( (mathScore>80 && englishScore >80 )   || 
                      (mathScore>80 && scienceScore >80)   ||
                      (scienceScore>80 && englishScore >80  ) 
                    )
   
return eligibleForAward=(sciencefair|| scholarship)
  
  
}
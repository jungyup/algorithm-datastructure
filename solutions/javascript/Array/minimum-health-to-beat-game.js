/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    // declare two variables to store total damage and most damage covered
    let totalDamage = 0;
    let mostDamageCovered = 0;
    
    for (let i = 0; i < damage.length; i++) {
        // if there is no damage, simply continue to next iteration
        if (damage[i] === 0) continue;
        
        // add to get total damage
        totalDamage += damage[i];

        // declare variable to store current damage covered
        let damageCovered = 0;

        // if armor is greater than damage
        // then current damange will be fully covered
        // if not, then only amount of armor can be covered
        if (damage[i] <= armor) {
            damageCovered = damage[i];
        } else {
            damageCovered = armor;
        }

        // compare current and previous damage covered
        // then update mostDamageCovered
        mostDamageCovered = Math.max(mostDamageCovered, damageCovered);
    }

    // we add 1 since user has to have more than 1 health
    return totalDamage - mostDamageCovered + 1;
};

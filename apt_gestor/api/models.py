from django.db import models

# Create your models here.


class AptoProj(models.Model):
    story_id = models.CharField(max_length=4, blank=True)
    data_apto = models.DateField(blank=True, null=True, max_length=255)
    vlr_apto = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'apto_proj'
        
    def __str__(self):
       return  'Id: {} - Data: {} / Valor Apontamento: {}'.format(self.story_id, self.data_apto, self.vlr_apto)